import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'

// Dashboard Components
import dashboard from '../views/dashboard'

// Widgets
import widgets from '../views/widgets'

// UI Components
import alerts from '../views/components/alerts'
import badges from '../views/components/badges'
import breadcrumbs from '../views/components/breadcrumbs'
import buttons from '../views/components/buttons'
import carousel from '../views/components/carousel'
import dropdowns from '../views/components/dropdowns'
import icons from '../views/components/icons'
import modals from '../views/components/modals'
import paginations from '../views/components/paginations'
import progress from '../views/components/progress'
import tables from '../views/components/tables'
import typography from '../views/components/typography'
import tabs from '../views/components/tabs'
import tooltips from '../views/components/tooltips'

// Form Components
import forms from '../views/forms/forms'

// Sample Pages
import error404 from '../views/pages/error-404'
import error500 from '../views/pages/error-500'
import login from '../views/pages/login'
import register from '../views/pages/register'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/widgets',
      name: 'widgets',
      component: widgets
    },
    {
      path: '/404',
      name: 'error-404',
      component: error404
    },
    {
      path: '/500',
      name: 'error-500',
      component: error500
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: alerts
    },
    {
      path: '/badges',
      name: 'badges',
      component: badges
    },
    {
      path: '/breadcrumbs',
      name: 'breadcrumbs',
      component: breadcrumbs
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: buttons
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: carousel
    },
    {
      path: '/dropdowns',
      name: 'dropdowns',
      component: dropdowns
    },
    {
      path: '/icons',
      name: 'icons',
      component: icons
    },
    {
      path: '/modals',
      name: 'modals',
      component: modals
    },
    {
      path: '/paginations',
      name: 'paginations',
      component: paginations
    },
    {
      path: '/progress',
      name: 'progress',
      component: progress
    },
    {
      path: '/tables',
      name: 'tables',
      component: tables
    },
    {
      path: '/typography',
      name: 'typography',
      component: typography
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: tabs
    },
    {
      path: '/tooltips',
      name: 'tooltips',
      component: tooltips
    },
    {
      path: '/forms',
      name: 'forms',
      component: forms
    }
  ]
})