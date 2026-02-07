import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CUqH5A8_.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_kgRCtpMH.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About | Hofma Publishing", "description": "About Niels and Hofma Publishing\u2014personal book projects published for the love of great stories.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="page-content" data-astro-cid-kh7btl4r> <div class="section-inner" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>About Hofma Publishing</h1> <div class="about-body" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Hofma Publishing is basically just me, Niels. It started as a hobby because I love the process of creating books—from doing the research to sitting with the layout. Today, I use this platform to share my projects with anyone who might find them interesting.
</p> <p data-astro-cid-kh7btl4r>
I publish through Amazon KDP to ensure my books can reach readers everywhere, whether you prefer holding a physical copy or reading on your Kindle.
</p> <p data-astro-cid-kh7btl4r>
For me, every book is a passion project. Whether it's a detailed guide to Europe or a new story, my goal is simply to create something that inspires, entertains, or informs. Thank you for supporting my work and being part of this journey.
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
