import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registration from "../views/Registration.vue";
import LoginView from "../views/LoginView";
import Email from "../views/Email";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Email',
    name: 'Forgot Password',
    component: Email
  },
  {
    path: '/Registration',
    name: 'createAccount',
    component: Registration
  },
  {
    path: '/LoginView',
    name: 'Back',
    component: LoginView
  },
  
  
 
  {
    path: '/aboutUs',
    name: 'aboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    } 
  },
  {
    path: '/blogWriting',
    name: 'blogWriting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BlogWritingView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
