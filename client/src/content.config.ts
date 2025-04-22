import { defineCollection } from "astro:content";
import { strapiLoader } from "strapi-community-astro-loader";
import type { Loader } from "astro/loaders";

// pass the collection type name to the loader
const strapiPostsLoader = defineCollection({
  loader: strapiLoader({ contentType: "article", params: { populate: "*" } }) as unknown as Loader,
});

export const collections = {
  strapiPosts: strapiPostsLoader,
};
