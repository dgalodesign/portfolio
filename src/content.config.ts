import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    lang: z.enum(['es', 'en']),
    order: z.number(),
    role: z.string(),
    year: z.string(),
    team: z.string(),
    metric: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { casos };
