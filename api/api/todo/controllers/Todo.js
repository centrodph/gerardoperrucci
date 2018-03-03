'use strict';

/**
 * Todo.js controller
 *
 * @description: A set of functions called "actions" for managing `Todo`.
 */

module.exports = {

  /**
   * Retrieve todo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.todo.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a todo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.todo.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an todo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.todo.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an todo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.todo.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an todo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.todo.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
