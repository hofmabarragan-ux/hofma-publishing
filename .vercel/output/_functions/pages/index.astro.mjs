import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, u as unescapeHTML, k as renderComponent, l as renderScript } from '../chunks/astro/server_CUqH5A8_.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Zn_fmCfN.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://hofmapublishing.com");
const $$BookCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookCard;
  const { title, description, price, imageUrl, amazonUrl, badge } = Astro2.props;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": title,
    "author": {
      "@type": "Person",
      "name": "Hofma Publishing"
      // You can change this to your specific author name
    },
    "description": description,
    "image": imageUrl,
    "url": amazonUrl,
    "offers": {
      "@type": "Offer",
      "price": price ? price.replace(/[^0-9.]/g, "") : "0.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": amazonUrl
    }
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script> ", '<article class="group relative flex flex-col bg-white border border-stone-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300"> ', ' <div class="aspect-[2/3] bg-stone-100 overflow-hidden"> <img', "", ` width="400" height="600" class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" onerror="this.style.display='none';this.nextElementSibling?.classList.remove('hidden');"> <div class="hidden flex w-full h-full items-center justify-center text-stone-400 text-sm p-6 text-center bg-stone-100"> <span>Book Cover</span> </div> </div> <div class="p-6 flex flex-col flex-1"> <h3 class="font-serif text-xl font-semibold text-stone-900 mb-2 leading-tight"> `, " </h3> ", ' <p class="text-stone-500 text-sm leading-relaxed mb-6 flex-1"> ', " </p> <a", ' target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-full py-3 px-5 bg-amber-900 hover:bg-amber-800 !text-white font-medium text-sm rounded-lg transition-colors duration-200">\nBuy on Amazon \u2192\n</a> </div> </article>'])), unescapeHTML(JSON.stringify(schema)), maybeRenderHead(), badge && renderTemplate`<span class="absolute top-4 right-4 z-10 px-3 py-1 bg-amber-900 text-amber-50 text-[10px] font-semibold uppercase tracking-wider rounded-md"> ${badge} </span>`, addAttribute(imageUrl, "src"), addAttribute(title, "alt"), title, price && renderTemplate`<p class="text-amber-900 font-semibold text-sm mb-2">${price}</p>`, description, addAttribute(amazonUrl, "href"));
}, "/Users/nielshofna/Documents/Hofma Publishing/src/components/BookCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const books = [
    {
      title: "Extended Color Edition",
      description: "The complete experience with bonus content and full-color interior. Premium hardback for the discerning reader.",
      price: null,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/P/B0G33G45CJ.jpg",
      amazonUrl: "https://www.amazon.com/dp/B0G33G45CJ",
      badge: "Recommended"
    },
    {
      title: "Color Edition",
      description: "Full-color interior for a vibrant reading experience. Elegant premium hardback binding.",
      price: null,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/P/B0FX9C7TS5.jpg",
      amazonUrl: "https://www.amazon.com/dp/B0FX9C7TS5",
      badge: null
    },
    {
      title: "Standard Edition (B&W)",
      description: "Classic black and white interior. Elegant and durable hardback\u2014perfect for everyday reading.",
      price: null,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/P/B0FDRXJX7C.jpg",
      amazonUrl: "https://www.amazon.com/dp/B0FDRXJX7C",
      badge: null
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hofma Publishing | Independent Publishing House" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-24 md:py-32 px-6 bg-gradient-to-b from-amber-50/50 to-transparent"> <div class="max-w-4xl mx-auto text-center"> <h1 class="font-serif text-4xl md:text-6xl font-semibold text-stone-900 mb-4 tracking-tight">
Hofma Publishing
</h1> <p class="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto">
Independent publishing house bringing quality books to readers worldwide.
</p> </div> </section>  <section class="py-20 md:py-28 px-6"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-3">
My Books
</h2> <p class="text-stone-500 max-w-xl mx-auto">
Available in premium hardback editions. Choose the format that suits you best.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"> ${books.map((book) => renderTemplate`${renderComponent($$result2, "BookCard", $$BookCard, { "title": book.title, "description": book.description, "price": book.price, "imageUrl": book.imageUrl, "amazonUrl": book.amazonUrl, "badge": book.badge })}`)} </div> <p class="mt-14 text-center text-stone-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
If you purchase a book, I would really appreciate it if you could leave a review on Amazon. Your feedback helps other readers discover these titles and means a lot to me.
</p> </div> </section>  <section class="py-20 md:py-28 px-6 bg-gradient-to-b from-amber-50/50 to-transparent"> <div class="max-w-xl mx-auto"> <div class="text-center mb-10"> <h2 class="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-3">
Newsletter
</h2> <p class="text-stone-500">
Stay updated with new releases, writing tips, and exclusive content.
</p> </div> <form id="newsletter-form" class="flex flex-col sm:flex-row gap-3"> <input type="email" name="email" id="newsletter-email" placeholder="Enter your email" required autocomplete="email" class="flex-1 px-4 py-3 rounded-lg border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:border-amber-900 transition-colors"> <button type="submit" id="newsletter-submit" class="px-6 py-3 bg-amber-900 hover:bg-amber-800 text-amber-50 font-semibold rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"> <span id="newsletter-submit-text">Subscribe</span> <span id="newsletter-spinner" class="hidden"> <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> </span> </button> </form> <p id="newsletter-message" class="mt-3 text-sm min-h-[1.25rem]" aria-live="polite"></p> </div> </section> ${renderScript($$result2, "/Users/nielshofna/Documents/Hofma Publishing/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/nielshofna/Documents/Hofma Publishing/src/pages/index.astro", void 0);

const $$file = "/Users/nielshofna/Documents/Hofma Publishing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
