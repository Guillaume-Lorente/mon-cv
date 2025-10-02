# 👨‍💻 CV / Portfolio — Guillaume Lorente

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-API-purple?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white)](https://vercel.com/)

Site CV/portfolio réalisé avec **Next.js 15**, **TypeScript** et **Tailwind**, design minimal et performant, pages animées, galeries, et formulaire de contact protégé.

- 🌐 **Pages** : Accueil, Parcours, Compétences (filtre/recherche), Projets (grille visuelle), Centres d’intérêts (lightbox), Contact
- 🎛️ **Navigation** : flèches latérales (desktop) + **swipe** (mobile/tablette)
- 🎞️ **Transitions** : Framer Motion (Template App Router)
- 🖼️ **Images** : `<Image>` optimisées, overlays, lightbox maison
- ✉️ **Contact** : formulaire **Nodemailer** (SMTP) + honeypot (+ reCAPTCHA optionnel)
- ♿ **A11y** : focus visibles, aria labels, réduction de mouvement respectée
- 🚀 **Déploiement** : prêt pour **Vercel**

---

## 🧱 Stack & structure

- **Framework** : Next.js (App Router, Server/Client Components)
- **UI** : Tailwind CSS, shadcn/ui, lucide-react
- **Anim** : Framer Motion
- **Email** : Nodemailer (SMTP)
- **Hébergeur** : Vercel

---

## 🚦 Démarrer en local

**Prérequis** : Node 20+ (idéalement Node 22), npm (ou pnpm).

```bash
# installer
npm i

# lancer en dev
npm run dev

# lint / build / start
npm run lint
npm run build
npm start

---

# SMTP Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=MAIL
SMTP_PASS=<MOT_DE_PASSE_APPLICATION_GMAIL>

# Destinataire & expéditeur
CONTACT_TO_EMAIL=MAIL
CONTACT_FROM_EMAIL="Portfolio <MAIL>"

# (Optionnel) reCAPTCHA v2
# NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...
# RECAPTCHA_SECRET_KEY=...

---

npm run dev       # dev server
npm run build     # build production
npm run start     # start prod
npm run lint      # eslint
```

🙌 Remerciements

Next.js
• Tailwind
• shadcn/ui

Framer Motion
• lucide-react
• Nodemailer
