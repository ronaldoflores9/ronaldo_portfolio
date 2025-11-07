# Ronaldo Flores — Personal Portfolio

This repository is my personal portfolio built with React and Vite. It showcases my projects, skills, and contact information, providing a clean, responsive, and accessible presentation of my work.

## Short description

Personal portfolio website built with React + Vite, featuring a projects gallery, skills section, contact form (EmailJS integration), and responsive design.

## Medium description

This portfolio demonstrates selected projects, technical skills, and ways to contact me. It's implemented with modern web tooling (Vite, React, Tailwind) and includes a contact form wired to EmailJS so visitors can send messages directly to my email. The site is responsive, accessible, and easy to customize.

## Long description

The project is a lightweight, production-ready personal portfolio that highlights professional work and technical skills. Key features include:

- Projects section with demo and source links (icons hidden when links are not available).
- Skills section with years of experience and a visual progress indicator.
- Contact form integrated with EmailJS to send messages to the owner's email (configured with Vite environment variables).
- Theme toggle, smooth scrolling, and small UI components (toasts, cards) for a polished UX.

The codebase uses React functional components, Tailwind CSS utilities, and a minimal state/hooks approach for interactivity. It's easy to fork and adapt for your own portfolio.

## Usage

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add your EmailJS variables (do not commit this file):

```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_USER_ID=public_xxx
```

3. Run the dev server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Deployment

Deploy static build output to Vercel, Netlify, or any static hosting. If you deploy to Vercel, add the same `VITE_EMAILJS_*` environment variables in the project settings (Environment Variables) so EmailJS works in production.

## Meta description (SEO)

Ronaldo Flores — Personal portfolio showcasing web development projects, technical skills, and contact information. Built with React, Vite, and Tailwind CSS.

## README blurb for GitHub

Personal portfolio website that showcases projects, skills, and contact options. Built with React + Vite, includes EmailJS contact integration and responsive UI components.

---

If you want me to tailor this README (add badges, deployment links, screenshots, or a live URL), tell me what to include and I will update it.
