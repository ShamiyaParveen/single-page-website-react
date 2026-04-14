# Single-page University Landing — React + Vite

- Responsive single-page landing template for a university/college built with React and Vite.
- Componentized layout including Hero, Programs, Gallery, Testimonials, Contact (Web3Forms) and a Video modal.

Key highlights

- Built a fast, production-ready SPA using Vite and React.
- Component-first structure for easy re-use and customization.
- Integrated Web3Forms for form submissions (serverless) and a video modal for media content.
- Accessibility and responsive styles across desktop and mobile.

Tech stack

- React 19, Vite, CSS modules (local styles per component)
- Dev tooling: ESLint, Vite dev server

Getting started

1. Install dependencies

```
npm install
```

2. Start dev server

```
npm run dev
```

3. Build for production

```
npm run build
```

4. Preview production build

```
npm run preview
```

Environment variables

- The contact form currently uses a Web3Forms access key. For deployment, set the key as an environment variable named `VITE_WEB3FORMS_KEY` and access it in code with `import.meta.env.VITE_WEB3FORMS_KEY`.

Deployment (Vercel)

- Connect your GitHub repo to Vercel.
- Framework: Vite (auto-detected).
- Build command: `npm run build` and Output directory: `dist`.
- Add `VITE_WEB3FORMS_KEY` to Project Environment Variables in Vercel.

Project structure (important files)

- `src/App.jsx` — app layout and component composition
- `src/main.jsx` — app entry
- `src/Component/*` — all UI components (Hero, Programs, About, Campus, Testimonial, Contact, Video-Player)
- `vite.config.js`, `eslint.config.js`, `package.json`


- Role: Frontend developer — implemented a responsive SPA using React + Vite, componentized the UI, integrated third-party form provider, and prepared the project for Vercel deployment.
- Impact: Lightweight Vite build, clean component separation, and ready-to-deploy configuration.

If you want, I can also:

- Rename `Pragram.css` to `Program.css` to fix the typo and update imports.
- Replace the hard-coded Web3Forms key with `import.meta.env.VITE_WEB3FORMS_KEY` in `src/Component/Contact/Contact.jsx` and add deployment steps for Vercel.

License

This project is for demo/portfolio use. Replace or add a license if you plan to publish the template.
