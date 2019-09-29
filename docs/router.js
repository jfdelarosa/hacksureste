import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46b03695 = () => interopDefault(import('../pages/app/index.vue' /* webpackChunkName: "pages/app/index" */))
const _235c526a = () => interopDefault(import('../pages/app/calendar.vue' /* webpackChunkName: "pages/app/calendar" */))
const _0aa8d9e4 = () => interopDefault(import('../pages/app/users/index.vue' /* webpackChunkName: "pages/app/users/index" */))
const _3f086c64 = () => interopDefault(import('../pages/app/tasks/agregar/index.vue' /* webpackChunkName: "pages/app/tasks/agregar/index" */))
const _b1acfcde = () => interopDefault(import('../pages/app/tasks/asignar.vue' /* webpackChunkName: "pages/app/tasks/asignar" */))
const _36ae558a = () => interopDefault(import('../pages/app/tasks/types.vue' /* webpackChunkName: "pages/app/tasks/types" */))
const _4e2a08a8 = () => interopDefault(import('../pages/app/tasks/ver/index.vue' /* webpackChunkName: "pages/app/tasks/ver/index" */))
const _5480bcfa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior,

  routes: [{
      path: "/app",
      component: _46b03695,
      name: "app"
    }, {
      path: "/app/calendar",
      component: _235c526a,
      name: "app-calendar"
    }, {
      path: "/app/users",
      component: _0aa8d9e4,
      name: "app-users"
    }, {
      path: "/app/tasks/agregar",
      component: _3f086c64,
      name: "app-tasks-agregar"
    }, {
      path: "/app/tasks/asignar",
      component: _b1acfcde,
      name: "app-tasks-asignar"
    }, {
      path: "/app/tasks/types",
      component: _36ae558a,
      name: "app-tasks-types"
    }, {
      path: "/app/tasks/ver",
      component: _4e2a08a8,
      name: "app-tasks-ver"
    }, {
      path: "/",
      component: _5480bcfa,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
