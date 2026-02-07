import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CUqH5A8_.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Zn_fmCfN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About | Hofma Publishing", "description": "Learn about Hofma Publishing, an independent publishing house dedicated to bringing quality books to readers worldwide.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="page-content" data-astro-cid-kh7btl4r> <div class="section-inner" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>About Hofma Publishing</h1> <div class="about-body" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Hofma Publishing is an independent publishing house dedicated to bringing quality books to readers worldwide. We believe in the power of storytelling and the importance of making great literature accessible to everyone.
</p> <p data-astro-cid-kh7btl4r>
Our books are available through Amazon Kindle Direct Publishing (KDP), making it easy for readers to discover and enjoy our titles in both print and digital formats.
</p> <p data-astro-cid-kh7btl4r>
We are committed to supporting authors and delivering books that inspire, entertain, and inform. Thank you for being part of our community of readers.
</p> </div> </div> </article> ` })} `;
}, "/Users/nielshofna/Documents/Hofma Publishing/src/pages/about.astro", void 0);

const $$file = "/Users/nielshofna/Documents/Hofma Publishing/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
