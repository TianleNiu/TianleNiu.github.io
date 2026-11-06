import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entry = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  label: z.string(),
  sample: z.boolean().default(false),
});

const works = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/works' }),
  schema: entry.extend({ cover: z.string(), alt: z.string() }),
});
const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/news' }),
  schema: entry,
});

export const collections = { works, news };
