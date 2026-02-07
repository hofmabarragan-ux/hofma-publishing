import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CUqH5A8_.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_kgRCtpMH.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Books = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Books | Hofma Publishing", "description": "Browse our collection of books available on Amazon Kindle Direct Publishing.", "data-astro-cid-xglhyxzr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="page-content" data-astro-cid-xglhyxzr> <div class="section-inner" data-astro-cid-xglhyxzr> <h1 data-astro-cid-xglhyxzr>Our Books</h1> <p class="section-intro" data-astro-cid-xglhyxzr>All our titles are available on Amazon. Click any book to purchase.</p> <div class="books-grid" data-astro-cid-xglhyxzr> <article class="book-card" data-astro-cid-xglhyxzr> <div class="book-cover" data-astro-cid-xglhyxzr> <div class="book-cover-placeholder" data-astro-cid-xglhyxzr> <span data-astro-cid-xglhyxzr>Book Cover</span> </div> </div> <div class="book-info" data-astro-cid-xglhyxzr> <h3 data-astro-cid-xglhyxzr>Book Title Placeholder</h3> <p class="book-author" data-astro-cid-xglhyxzr>Author Name</p> <p class="book-description" data-astro-cid-xglhyxzr>A brief description of your book will go here.</p> <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary" data-astro-cid-xglhyxzr>Buy on Amazon</a> </div> </article> <article class="book-card" data-astro-cid-xglhyxzr> <div class="book-cover" data-astro-cid-xglhyxzr> <div class="book-cover-placeholder" data-astro-cid-xglhyxzr> <span data-astro-cid-xglhyxzr>Book Cover</span> </div> </div> <div class="book-info" data-astro-cid-xglhyxzr> <h3 data-astro-cid-xglhyxzr>Book Title Placeholder</h3> <p class="book-author" data-astro-cid-xglhyxzr>Author Name</p> <p class="book-description" data-astro-cid-xglhyxzr>A brief description of your book will go here.</p> <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary" data-astro-cid-xglhyxzr>Buy on Amazon</a> </div> </article> <article class="book-card" data-astro-cid-xglhyxzr> <div class="book-cover" data-astro-cid-xglhyxzr> <div class="book-cover-placeholder" data-astro-cid-xglhyxzr> <span data-astro-cid-xglhyxzr>Book Cover</span> </div> </div> <div class="book-info" data-astro-cid-xglhyxzr> <h3 data-astro-cid-xglhyxzr>Book Title Placeholder</h3> <p class="book-author" data-astro-cid-xglhyxzr>Author Name</p> <p class="book-description" data-astro-cid-xglhyxzr>A brief description of your book will go here.</p> <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary" data-astro-cid-xglhyxzr>Buy on Amazon</a> </div> </article> </div> </div> </article> ` })} `;
}, "/Users/nielshofna/Documents/Hofma Publishing/src/pages/books.astro", void 0);

const $$file = "/Users/nielshofna/Documents/Hofma Publishing/src/pages/books.astro";
const $$url = "/books";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Books,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
