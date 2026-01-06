# 🚀 DealsHub - Aceternity UI Deals-Blog

Ein hochperformanter, WordPress-kompatibler Deals-Blog erstellt mit Next.js 16, Tailwind CSS 4 und Aceternity UI Komponenten.

## ✨ Features

- 🎨 **Aceternity UI Design** - Moderne, animierte Komponenten
- 🌙 **Dark Mode** - Vollständige Unterstützung für Hell/Dunkel-Modus
- 📱 **Responsive** - Optimiert für alle Bildschirmgrößen
- ⚡ **Performance** - Optimierte Bilder, Code-Splitting, SSR
- 🔍 **SEO Ready** - Meta-Tags, Open Graph, strukturierte Daten
- 🇩🇪 **Deutsche Inhalte** - Impressum, Datenschutz, deutschsprachig
- 🔧 **WordPress Ready** - Vorbereitet für Headless CMS Integration
- 🤖 **n8n Ready** - Newsletter & Automatisierung vorbereitet

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **Datum:** date-fns
- **Utilities:** clsx, tailwind-merge

## 🚀 Schnellstart

1. **Dependencies installieren:**
```bash
npm install
```

2. **Entwicklungsserver starten:**
```bash
npm run dev
```

3. **Browser öffnen:** [http://localhost:3000](http://localhost:3000)

## 📁 Projektstruktur

```
deals-blog/
├── app/                    # Next.js App Router Pages
│   ├── deals/              # Deals Übersicht & Detail
│   ├── blog/               # Blog Übersicht & Detail
│   ├── kategorie/          # Kategorie-Seiten
│   ├── impressum/          # Rechtliche Seiten
│   └── datenschutz/
├── components/
│   ├── ui/                 # Aceternity UI Komponenten
│   ├── layout/             # Navbar, Footer
│   ├── deals/              # Deal-spezifische Komponenten
│   ├── blog/               # Blog-spezifische Komponenten
│   ├── shared/             # Gemeinsame Komponenten
│   └── providers/          # Context Provider
├── lib/
│   ├── data/               # Statische Deals & Blog Daten
│   ├── utils/              # Hilfsfunktionen
│   └── wordpress/          # WordPress API (vorbereitet)
└── types/                  # TypeScript Definitionen
```

## 🎨 Verwendete Aceternity Components

- Aurora Background (Hero)
- Card Hover Effect (Deal Cards)
- Moving Border (CTA Buttons)
- Floating Navbar (Navigation)
- Background Beams (Blog Hero)
- Sparkles (Überschriften)
- Background Gradient
- Tabs
- Bento Grid

## 🔧 WordPress Integration (Vorbereitet)

Die Integration mit WordPress Headless CMS ist vorbereitet:

1. WordPress mit WPGraphQL Plugin installieren
2. `.env.local` erstellen (siehe `.env.example`)
3. `lib/wordpress/api.ts` Funktionen aktivieren

```env
WORDPRESS_API_URL=https://dein-wordpress.com/wp-json
WORDPRESS_API_TOKEN=dein_token_hier
```

## 🤖 n8n Automation (Optional)

Newsletter-Integration und Deal-Automatisierung:

### Deal-Erstellung Workflow:
1. RSS Feed Monitor (z.B. Amazon Deals Feed)
2. OpenAI Node: Beschreibung optimieren
3. HTTP Request: Bild von Unsplash holen
4. WordPress Node: Deal als Post erstellen
5. Webhook: Revalidate Next.js Cache

### Newsletter Workflow:
1. Webhook Trigger (von Website)
2. Email-Validierung
3. Mailchimp/Sendinblue Integration
4. Datenbank: Subscriber speichern

## 📝 Deals hinzufügen

Aktuell werden Deals statisch in `lib/data/deals.ts` verwaltet.

```typescript
// lib/data/deals.ts
export const deals: Deal[] = [
  {
    id: "1",
    slug: "produkt-name",
    title: "Produktname",
    description: "Beschreibung...",
    originalPrice: 199,
    salePrice: 149,
    discount: 25,
    // ... weitere Felder
  },
];
```

## 🚀 Deployment

### Vercel (Empfohlen)
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📋 Scripts

```bash
npm run dev      # Entwicklungsserver
npm run build    # Produktion Build
npm run start    # Produktion Server
npm run lint     # ESLint ausführen
```

## 🔐 Umgebungsvariablen

Kopiere `.env.example` zu `.env.local`:

```env
# WordPress (optional)
WORDPRESS_API_URL=https://dein-wordpress.com/wp-json
WORDPRESS_API_TOKEN=token

# n8n (optional)
N8N_NEWSLETTER_WEBHOOK=https://dein-n8n.com/webhook/newsletter

# Revalidation
REVALIDATE_SECRET=geheimer_key
```

## 📄 Lizenz

MIT License - Frei für kommerzielle und private Nutzung.

---

Made with ❤️ in Germany
