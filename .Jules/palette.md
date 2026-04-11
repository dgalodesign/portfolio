## UX/Accessibility Learnings - Portfolio

- The site is a wrapper for a Super.site portfolio. To avoid a "white flash" during loading, the parent page background should match the portfolio's dark theme.
- The `iframe` must have a `title` attribute for accessibility.
- The `html` `lang` attribute should reflect the primary content language (Spanish).
- Maintain global styles in `style.css` instead of internal `<style>` blocks for better maintenance.
