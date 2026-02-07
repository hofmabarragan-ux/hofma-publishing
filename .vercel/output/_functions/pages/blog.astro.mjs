import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CUqH5A8_.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Zn_fmCfN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const posts = [
    {
      title: "Welcome to Our Blog",
      excerpt: "We're excited to share news, updates, and insights from Hofma Publishing. Stay tuned for author interviews, book recommendations, and behind-the-scenes updates.",
      date: "2025-02-01",
      slug: "welcome"
    },
    {
      title: "The Joy of Independent Publishing",
      excerpt: "What drives us to publish independently? A passion for books, a commitment to quality, and the freedom to bring diverse voices to readers.",
      date: "2025-01-15",
      slug: "joy-of-independent-publishing"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Hofma Publishing", "description": "News, updates, and insights from Hofma Publishing.", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="page-content" data-astro-cid-5tznm7mj> <div class="section-inner" data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>Blog</h1> <p class="section-intro" data-astro-cid-5tznm7mj>News, updates, and insights from Hofma Publishing.</p> <ul class="posts-list" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li class="post-card" data-astro-cid-5tznm7mj> <article data-astro-cid-5tznm7mj> <time${addAttribute(post.date, "datetime")} data-astro-cid-5tznm7mj>${new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time> <h3 data-astro-cid-5tznm7mj>${post.title}</h3> <p data-astro-cid-5tznm7mj>${post.excerpt}</p> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="read-more" data-astro-cid-5tznm7mj>Read more →</a> </article> </li>`)} </ul> </div> </article> ` })} `;
}, "/Users/nielshofna/Documents/Hofma Publishing/src/pages/blog/index.astro", void 0);

const $$file = "/Users/nielshofna/Documents/Hofma Publishing/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
