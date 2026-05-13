import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/authors" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      slug: z.string(),
      bio: z.string().optional(),
      avatar: image().optional(),
      website: z.string().url().optional(),
      github: z.string().optional(),
    }),
});

const link = z.object({
  type: z.enum(["github"]),
  title: z.string(),
  url: z.string().url(),
});

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      date: z.coerce.date().optional(),
      draft: z.boolean().optional(),
      author: reference("authors").optional(),
      image: image().optional(),
      markdown_url: z.string().url().optional(),
      tags: z.array(z.string()).optional(),
      links: z.array(link).optional(),
    }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{json,md}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    sections: z
      .array(
        z.object({
          heading: z.string().optional(),
          text: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  authors: authorsCollection,
  posts: postsCollection,
  pages: pagesCollection,
};
