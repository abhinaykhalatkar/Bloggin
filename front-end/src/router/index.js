import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registration from "../views/Registration.vue";
import LoginView from "../views/LoginView";
import Email from "../views/Email";
import Subscription from "../views/Subscription";

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
    path: '/subscription',
    name: 'subscription',
    component: Subscription
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
    path: '/profile',
    name: 'profile',
    component: function () {
      return import('../views/ProfileView.vue')
    }
  },
  {
    path: '/templateEditor',
    name: 'templateEditor',
    component: function () {
      return import('../views/TemplateEditor.vue')
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
  },
  {
    path: `/readBlogs/:id`,
    name: 'blogReader',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ReadBlogs.vue')
    }
  },
  {
    path: '/publishedLink',
    name: 'publishLink',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/FinalLink.vue')
    }
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
