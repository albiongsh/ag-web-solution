# AG Web Solutions V2 — Preview

This is a separate **working preview**, not a live GitHub deployment. It uses HTML, CSS and JavaScript with no build tools.

## Preview
Open `index.html` in a browser, or use VS Code Live Server. Test desktop and mobile viewport widths.

## Publishing safely
1. Back up your original repository.
2. Create a separate Git branch (e.g. `website-v2`) before copying these files into your local GitHub repository.
3. Test the preview and review all content, links, and the contact form.
4. Merge into `main` and push only after approval.

## Notes
- The images are **cropped from the AI-generated concept artwork**, not production photography; some crops may contain embedded UI artifacts. For pixel-precise fidelity, original layered/source design assets would be needed.
- Three portfolio thumbnails are explicitly marked as **design concepts** rather than verified client projects.
- The original Formspree endpoint and contact details were preserved from the provided source. Verify ownership and test the form before publishing.
- Mockup statistics such as “50+ projects” and “100% satisfaction” are intentionally excluded because they were not verified.
- The original logos are retained in `assets/`; the preview uses a typographic AG mark inspired by the mockup.

## V2.1 refinements
- Replaced SKYDUEL project preview with the supplied original image (`assets/skyduel-official.webp`), without retouching or replacing its content. The WebP format uses visually high-quality lossy compression; the exact uploaded PNG is not embedded.
- SKYDUEL uses `object-fit: contain` so the complete artwork is shown without cropping.
- Improved mobile image sizing, responsive button/form sizing, navigation overflow, keyboard focus and Escape key handling.

## Publish with GitHub Desktop (after preview approval)
1. Keep the current live repository as a backup. In GitHub Desktop, choose **Branch → New branch** and name it `website-v2`.
2. Copy the *contents* of this V2 folder (not the outer folder itself) into the local `ag-web-solution` repository. Ensure `index.html` is at the repository root.
3. In GitHub Desktop, review Changes, enter a commit message and click **Commit to website-v2**; then **Publish branch** or **Push origin**. This does not replace the live `main` branch.
4. Preview and test desktop/mobile, language switching, links, form submission, and all images. Confirm the Formspree account and contact details.
5. Once approved, merge `website-v2` into `main` using GitHub Desktop (**Branch → Merge into current branch** while on `main`) and **Push origin**. If your site is served from GitHub Pages on `main`, this may deploy automatically; check **Settings → Pages** to confirm the source. Other hosts may require separate deployment.
6. Verify the live URL on mobile and desktop; keep the original branch or tag for rollback.

No visual implementation can be guaranteed pixel-identical to a single AI-generated static mockup across all screen sizes. Validate with browser screenshots at target viewport sizes before production approval.
