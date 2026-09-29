# Portafolio · Edgar D' Galo

Sitio personal UX/UI bilingüe (ES/EN) con [Astro](https://astro.build). Estático, sin iframes.

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Dónde editar
| Qué | Dónde |
|---|---|
| Email, redes, GA, formulario | `src/site.ts` |
| Textos de la interfaz (ES/EN) | `src/i18n.ts` |
| Casos de estudio | `src/content/casos/{es,en}/*.md` (poner `draft: false` al publicar) |
| Estilos y tema | `src/styles/global.css` |
| CV | enlace `cvUrl` en `src/site.ts` |
| Imagen social | `public/og.png` |

Todo lo marcado `TODO` es contenido provisional que debe reemplazarse.

## Formulario de contacto
Crea un formulario en Formspree y pega su URL en `formEndpoint` (`src/site.ts`). Sin endpoint, el formulario abre el cliente de correo (`mailto:`).

## Despliegue en Vercel
1. Importa el repo en Vercel (framework Astro detectado; `vercel.json` incluido).
2. Añade el dominio `edgardgalo.com` en Project → Domains y apunta el DNS a Vercel (A `76.76.21.21` o CNAME `cname.vercel-dns.com`).
3. Retira la configuración de GitHub Pages (el archivo `CNAME` ya fue eliminado).
4. Envía `https://edgardgalo.com/sitemap-index.xml` a Google Search Console.
