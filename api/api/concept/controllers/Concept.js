'use strict';

/**
 * Concept.js controller
 *
 * @description: A set of functions called "actions" for managing `Concept`.
 */

module.exports = {

  /**
   * Retrieve concept records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.concept.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a concept record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.concept.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an concept record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.concept.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an concept record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.concept.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an concept record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.concept.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
