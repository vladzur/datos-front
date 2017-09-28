import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Announcements from '../pages/Announcements'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/announcements',
      name: 'Announcements',
      component: Announcements,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
