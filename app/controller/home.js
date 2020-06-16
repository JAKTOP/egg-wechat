'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
   
    ctx.apiSuccess('Hi egg you','ok',200);
  }
}

module.exports = HomeController;
