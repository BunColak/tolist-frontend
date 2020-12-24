import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../views/Todos.vue'
import Templates from '../views/Templates.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/templates',
    name: 'Templates',
    component: Templates
  },
  {
    path: '/templates/:id',
    name: 'Template',
    component: Templates
  },
  {
    path: '/',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/:id',
    name: 'TodoList',
    component: Todos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
