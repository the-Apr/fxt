import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const FaqList = () => import ('../components/FaqList.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },

  //About
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About'
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
    },
    props: true, 
    children: [
      {
        path: '/:id', name: 'Que', component: FaqList 
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // Set the document title based on the route meta title
  document.title = `${to.meta.title} | FXT`;

  // Check if the page is being refreshed
  if (from.name && !to.name) {
    // Redirect to the home page
    next('/about');
  } else {
    // Continue with the navigation
    next();
  }
});

export default router
