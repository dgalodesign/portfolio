## 2025-05-14 - Loading Experience and Accessibility Improvements

**Learning:** Providing a matching `background-color` on the parent container of an iframe prevents a "white flash" during loading, especially in dark-themed applications. Setting the correct `lang` attribute and descriptive `title` for iframes is crucial for screen reader accessibility.

**Action:** Always check for dark theme background colors and apply them to the root document when wrapping external content in an iframe. Ensure semantic HTML attributes like `lang` match the primary content language.
