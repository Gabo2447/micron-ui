import { defineCollection, z } from 'astro:content';

const componentCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

const overviewCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
  })
})

export const collections = {
  components: componentCollection,
  overview: overviewCollection
};
