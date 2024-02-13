import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  // Products
  {
    path: '/products',
    name: 'products',
    component: () => import( /* webpackChunkName: "products" */ '../views/Products.vue'),
    meta: {
      title: 'Products'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
