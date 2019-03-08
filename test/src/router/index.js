import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const components = {
  moudle1: () => import('@/pages/index'),
  moudle2: () => import('@/components/com_1'),
  moudle3: () => import('@/components/com_juming'),
  moudle4: () => import('@/pages/index_juming'),
  moudle5: () => import('@/pages/index3'),
  moudle6: () => import('@/components/com_3'),
}

const router = new Router({
  // mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      meta:{
        title:'首页',
        keepAlive: true
      },
      component: components.moudle1
    },
    {
      path: '/com1',
      name: 'com1',
      meta:{
        title:'组件'
      },
      component: components.moudle2
    },
    {
      path: '/comJuming',
      name: 'comJuming',
      meta:{
        title:'组件'
      },
      component: components.moudle3
    },
    {
      path: '/index2',
      name: 'index2',
      meta:{
        title:'组件'
      },
      component: components.moudle4
    },
    {
      path: '/index3',
      name: 'index3',
      meta:{
        title:'组件'
      },
      component: components.moudle5
    },
    {
      path: '/map',
      meta:{
        title:'地图'
      },
      component: () => import('@/pages/map')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router
