'use strict';

/**
 * Priority.js controller
 *
 * @description: A set of functions called "actions" for managing `Priority`.
 */

module.exports = {

  /**
   * Retrieve priority records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.priority.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a priority record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.priority.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an priority record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.priority.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an priority record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.priority.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an priority record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.priority.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
