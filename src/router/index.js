import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  //About
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'Products'
    }
  },

  // Pricing
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import( /* webpackChunkName: "pricing" */ '../views/Pricing.vue'),
    meta: {
      title: 'Pricing'
    }
  },

  // FXT Store
  {
    path: '/fxt-store',
    name: 'fxt-store',
    component: () => import( /* webpackChunkName: "FXT Store" */ '../views/FxtStore.vue'),
    meta: {
      title: 'FXT Store'
    }
  },

  // Blog
  {
    path: '/blog',
    name: 'blog',
    component: () => import( /* webpackChunkName: "blog" */ '../views/Blog.vue'),
    meta: {
      title: 'Blog'
    }
  },

  // FAQ
  {
    path: '/faq',
    name: 'faq',
    component: () => import( /* webpackChunkName: "faq" */ '../views/Faq.vue'),
    meta: {
      title: 'Faq'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FXT`;
  next();
})

export default router
