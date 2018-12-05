import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Mobile from '../pages/mobile-page.vue'
import Loading from '../pages/loading.vue'

const routes = [

  {
    path: '/',
    name: 'loading',
    component: Loading
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: Mobile
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new VueRouter({
  routes
})
