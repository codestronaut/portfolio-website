// @ts-check
import { defineConfig, envField } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare(),
	env: {
		schema: {
			// Public: it ships in the page. Read at build time, from `.env` locally.
			TURNSTILE_SITE_KEY: envField.string({ context: 'client', access: 'public' }),
			// Secrets: read at runtime on the Worker, from `.dev.vars` locally.
			TURNSTILE_SECRET: envField.string({ context: 'server', access: 'secret' }),
			RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }),
			CONTACT_EMAIL: envField.string({ context: 'server', access: 'secret' }),
			// Resend's shared sender only delivers to your own account's address; set this once a domain is verified.
			RESEND_FROM: envField.string({
				context: 'server',
				access: 'secret',
				default: 'Portfolio <onboarding@resend.dev>',
			}),
		},
	},
});
