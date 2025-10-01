import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/experience',
      name: 'experience',
      // route level code-splitting
      // this generates a separate chunk (Experience.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExperienceView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      // route level code-splitting
      // this generates a separate chunk (Skills.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SkillsView.vue'),
    },
    {
      path: '/education',
      name: 'education',
      // route level code-splitting
      // this generates a separate chunk (Education.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EducationView.vue'),
    },
  ],
})

export default router
