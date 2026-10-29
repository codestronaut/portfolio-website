# Portfolio

The personal site of Aditya Rohman, a design engineer who builds mobile apps. It's a single page: a hero with the apps I've shipped, project cards, experience, testimonials, the tools I use, and a contact form.

Built with [Astro](https://astro.build) and deployed to Cloudflare Workers.

## Stack

- **Astro 7** with the `@astrojs/cloudflare` adapter, so the page is static and the contact form runs as an [Astro Action](https://docs.astro.build/en/guides/actions/) on the Worker.
- **Cloudflare Turnstile** to keep bots out of the contact form, plus a hidden honeypot field.
- **Resend** to deliver contact messages by email. Replying from the inbox goes straight to the visitor.
- **Mona Sans** (variable), served from `@fontsource-variable/mona-sans`.
- **Bun** for installs and scripts. Node 22.23.4 or newer is required.

## Getting started

```bash
bun install
```

Copy the example environment files. Both ship with Cloudflare's Turnstile test keys, which always pass, so the form works locally without a real widget.

```bash
cp .env.example .env
```

```bash
cp .dev.vars.example .dev.vars
```

Then fill in `RESEND_API_KEY` and `CONTACT_EMAIL` in `.dev.vars` if you want messages to actually send.

Start the dev server at `localhost:4321`:

```bash
bun dev
```

## Environment variables

Declared in [astro.config.mjs](astro.config.mjs) and typed through `astro:env`.

| Name                 | Kind           | Where it lives locally | Purpose                                                                                      |
| :------------------- | :------------- | :--------------------- | :------------------------------------------------------------------------------------------- |
| `TURNSTILE_SITE_KEY` | Public, build  | `.env`                 | Turnstile widget key. `.env.production` holds the real one for `astro build`.                |
| `TURNSTILE_SECRET`   | Secret, runtime | `.dev.vars`           | Verifies Turnstile tokens on the server.                                                     |
| `RESEND_API_KEY`     | Secret, runtime | `.dev.vars`           | Resend API key.                                                                              |
| `CONTACT_EMAIL`      | Secret, runtime | `.dev.vars`           | Where messages are delivered. With the default sender it must be your Resend account's address. |
| `RESEND_FROM`        | Secret, runtime | `.dev.vars` (optional) | Sender address. Defaults to `Portfolio <onboarding@resend.dev>`; set it once a domain is verified. |

In production, set the secrets on the Worker instead of in a file:

```bash
bunx wrangler secret put RESEND_API_KEY
```

## Project structure

```text
src/
├── actions/index.ts      # sendMessage: Turnstile check, then email via Resend
├── assets/               # icons, flags, phone mockups, tool logos and previews
├── components/           # Profile, HeroPhones, Tools, Testimonials, Counter, Dither, ...
├── data/portfolio.ts     # all page content: projects, experience, testimonials, tools, contact
├── layouts/Layout.astro  # <head>, fonts, favicons, Open Graph tags
├── pages/index.astro     # the page
└── styles/global.css
public/                   # favicons and og.jpg
```

To change what the site says, edit [src/data/portfolio.ts](src/data/portfolio.ts). Most content lives there rather than in the markup.

## Commands

| Command                  | Action                                                  |
| :----------------------- | :------------------------------------------------------ |
| `bun dev`                | Start the dev server at `localhost:4321`                |
| `bun run build`          | Build the site and Worker to `./dist/`                  |
| `bun preview`            | Preview the production build locally                    |
| `bun run generate-types` | Regenerate Cloudflare binding types with `wrangler types` |
| `bun astro ...`          | Run Astro CLI commands such as `astro check`            |

## Deployment

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds every pull request as a check. Pushes to `main` build and then run `wrangler deploy`, using the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets. Worker settings are in [wrangler.jsonc](wrangler.jsonc).
