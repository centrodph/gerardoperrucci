'use strict';

/**
 * Concepts.js controller
 *
 * @description: A set of functions called "actions" for managing `Concepts`.
 */

module.exports = {

  /**
   * Retrieve concepts records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.concepts.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a concepts record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.concepts.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an concepts record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.concepts.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an concepts record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.concepts.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an concepts record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.concepts.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
