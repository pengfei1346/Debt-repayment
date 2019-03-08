import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  // layout:()=>import('../views/layout/layout.vue'),
  // login:()=>import('../views/login/login.vue'),
  // register:()=>import('../views/register/index.vue'),
}

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/list'
    },
    {
      path: '/index',
      name: 'index',
      component:()=>import('@/pages/index'),

    },
    {
      path: '/test',
      name: 'test',
      component:()=>import('@/components/test'),
    },
    {
      path: '/list',
      meta: {
        title: '商品列表'
      },
      component: (resolve) => require(['@/pages/list.vue'], resolve)
    },
    {
      path: '/product/:id',
      meta: {
        title: '商品详情'
      },
      component: (resolve) => require(['@/pages/product.vue'], resolve)
    },
    {
      path: '/cart',
      meta: {
        title: '购物车'
      },
      component: (resolve) => require(['@/pages/cart.vue'], resolve)
    }
  ]
})
