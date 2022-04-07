import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/BoardView.vue')
    },
  },
  {
    path: '/board',
    name: 'board',
    component: function () {
      return import('../views/BoardView.vue')
    },
    children : [{
      path : ':page', 
      component : function() { return import ("../components/PageComponent.vue") }
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    },
  },
  {
    path: '/user/:user',
    name: 'user',
    component: function () {
      return import('../views/UserView.vue')
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
