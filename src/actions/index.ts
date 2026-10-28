import { ActionError, defineAction } from 'astro:actions';
import { CONTACT_EMAIL, RESEND_API_KEY, RESEND_FROM, TURNSTILE_SECRET } from 'astro:env/server';
import { z } from 'astro/zod';

export const server = {
	sendMessage: defineAction({
		accept: 'form',
		input: z.object({
			name: z.string().trim().min(1).max(100),
			email: z.email(),
			message: z.string().trim().min(1).max(5000),
			// Honeypot: hidden from people, so only bots fill it in.
			company: z.string().nullish(),
			'cf-turnstile-response': z.string().min(1),
		}),
		handler: async (input, context) => {
			// Answer as if it worked, so a bot gets no signal to adapt to.
			if (input.company) return { sent: true };

			const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
				method: 'POST',
				body: new URLSearchParams({
					secret: TURNSTILE_SECRET,
					response: input['cf-turnstile-response'],
					remoteip: context.request.headers.get('CF-Connecting-IP') ?? '',
				}),
			});
			const { success } = (await verification.json()) as { success: boolean };
			if (!success) {
				throw new ActionError({ code: 'FORBIDDEN', message: 'The spam check didn’t pass.' });
			}

			const response = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
				body: JSON.stringify({
					from: RESEND_FROM,
					to: CONTACT_EMAIL,
					// Replying from the inbox goes straight to the visitor.
					reply_to: input.email,
					subject: `Hello from ${input.name}`,
					text: `${input.message}\n\n${input.name}\n${input.email}`,
				}),
			});
			if (!response.ok) {
				console.error('Resend rejected the message', response.status, await response.text());
				throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'The email couldn’t be sent.' });
			}

			return { sent: true };
		},
	}),
};
