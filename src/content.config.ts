import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.union([z.string(), z.date()]),
		author: z.string(),
		tags: z.array(z.string()),
		coverImage: z.string().optional(),
	}),
});

export const collections = {
	blog,
};
