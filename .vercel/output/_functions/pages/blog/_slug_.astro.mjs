import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CUqH5A8_.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Zn_fmCfN.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://hofmapublishing.com");
function getStaticPaths() {
  return [
    { params: { slug: "welcome" }, props: { title: "Welcome to Our Blog", date: "2025-02-01", content: "We're excited to share news, updates, and insights from Hofma Publishing. Stay tuned for author interviews, book recommendations, and behind-the-scenes updates. Thank you for visiting our blog!" } },
    { params: { slug: "joy-of-independent-publishing" }, props: { title: "The Joy of Independent Publishing", date: "2025-01-15", content: "What drives us to publish independently? A passion for books, a commitment to quality, and the freedom to bring diverse voices to readers. Independent publishing allows us to take creative risks and connect directly with our audience." } }
  ];
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { title, date, content } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} | Hofma Publishing`, "description": content.slice(0, 160), "data-astro-cid-4sn4zg3r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="page-content" data-astro-cid-4sn4zg3r> <div class="section-inner" data-astro-cid-4sn4zg3r> <nav class="breadcrumb" data-astro-cid-4sn4zg3r> <a href="/blog/" data-astro-cid-4sn4zg3r>Blog</a> <span class="separator" data-astro-cid-4sn4zg3r>/</span> <span data-astro-cid-4sn4zg3r>${title}</span> </nav> <time${addAttribute(date, "datetime")} data-astro-cid-4sn4zg3r>${new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time> <h1 data-astro-cid-4sn4zg3r>${title}</h1> <div class="post-body" data-astro-cid-4sn4zg3r> <p data-astro-cid-4sn4zg3r>${content}</p> </div> <p data-astro-cid-4sn4zg3r><a href="/blog/" class="back-link" data-astro-cid-4sn4zg3r>← Back to Blog</a></p> </div> </article> ` })} `;
}, "/Users/nielshofna/Documents/Hofma Publishing/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/nielshofna/Documents/Hofma Publishing/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
