# Bozkurt-Inovations Web App

Production-ready portfolio and lead-capture website for Bozkurt-Inovations, built with Next.js App Router, React 19, TypeScript, and Tailwind CSS.

This project showcases service offerings, development lifecycle, and includes a working contact flow that sends consultation requests by email through an API route.

## Overview

The application is a modern single-page marketing site composed of:

- Hero and architecture-focused introduction
- Service offerings grid
- Development lifecycle section
- Call-to-action with modal contact form
- Server-side email delivery via `/api/contact`

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS
- Nodemailer (contact email delivery)
- ESLint + Prettier

## Project Structure

```text
app/
	api/
		contact/
			route.ts              # POST endpoint for contact form submissions
	components/
		containers/
			ServiceContainer.tsx  # Service card renderer
		modals/
			ContactForm.tsx       # Modal form + submit logic
	sections/
		Architecture.tsx        # Hero/intro section
		services.tsx            # Services section
		LifeCycleSection.tsx    # Development lifecycle section
		Cta.tsx                 # Bottom CTA section
	utils/
		data/
			servicesData.ts       # Service content source
			devCycle.ts           # Lifecycle content source
	globals.css               # Global and layout-related styles
	layout.tsx                # Root metadata/layout
	page.tsx                  # Main page composition
```

## Features

### 1) Business-focused landing experience

- Section-driven structure for clear storytelling
- Responsive layout across mobile and desktop
- Strong visual hierarchy and CTA placement

### 2) Data-driven content blocks

- Service cards generated from `servicesData.ts`
- Lifecycle steps generated from `devCycle.ts`
- Easy content updates without changing component logic

### 3) Modal consultation form

- Collects:
  - Full name
  - Phone number
  - Email address
  - Location
  - Project message
- Async submit to `/api/contact`
- Success/error feedback states in UI

### 4) Email delivery backend

- API route receives form payload
- Nodemailer sends formatted plain text + HTML email
- Returns JSON success/error responses

## Local Development

### Prerequisites

- Node.js 20+
- npm (or yarn/pnpm/bun)

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

Open <http://localhost:3000>

## Environment Variables

Create a `.env.local` file in the project root:

```bash
CONTACT_EMAIL=your-address@gmail.com
CONTACT_EMAIL_APP_PASSWORD=your-app-password
```

### Notes

- `CONTACT_EMAIL` is used as both sender auth account and recipient inbox.
- For Gmail, use an App Password (not your regular account password).
- Never commit `.env.local`.

## Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run lint:fix    # Auto-fix lint issues
npm run typecheck   # Run TypeScript checks
npm run format      # Format all files with Prettier
npm run format:check
```

## Contact API Contract

### Endpoint

`POST /api/contact`

### Request body

```json
{
  "fullName": "Jane Doe",
  "phoneNumber": "+1 555 123 45 67",
  "emailAddress": "jane@company.com",
  "location": "Istanbul, Turkiye",
  "message": "I need a web platform for my business"
}
```

### Success response

```json
{
  "success": true
}
```

### Error response

```json
{
  "success": false,
  "error": "Could not send email"
}
```

## Production Notes

- Configure environment variables in your hosting platform.
- Verify SMTP provider limits and sender policies.
- Test `/api/contact` after each deployment with real credentials.
- Keep dependencies up to date for security.

## Brand and Content Ownership

This codebase and content are tailored for Bozkurt-Inovations.
