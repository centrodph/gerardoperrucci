'use strict';

/**
 * Status.js controller
 *
 * @description: A set of functions called "actions" for managing `Status`.
 */

module.exports = {

  /**
   * Retrieve status records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.status.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a status record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.status.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an status record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.status.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an status record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.status.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an status record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.status.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
