/**
 * `populate-article` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  cover: {
    fields: ["url", "alternativeText", "name", "width", "height"],
  },
  blocks: {
    on: {
      "shared.media": {
        populate: {
          file: {
            fields: ["url", "alternativeText", "name", "width", "height"],
          },
        },
      },

      "shared.slider": {
        populate: {
          files: {
            fields: ["url", "alternativeText", "name", "width", "height"],
          },
        },
      },

      "shared.quote": true,

      "shared.rich-text": true,
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate-article middleware.");
    ctx.query.populate = populate;
    await next();
  };
};
