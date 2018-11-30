import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Mobile from '../pages/mobile-page.vue'

const routes = [

  {
    path: '/',
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
