import { usePlayersStore } from '@/stores/players';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
      path: '/config',
      name: 'config',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GameConfigView.vue'),
    },
    {
      path: '/game',
      name: 'game',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route which is lazy-loaded when the route is visited.
      component: () => import('../views/GameView.vue'),
    },
  ],
});

// router.beforeEach(async (to, from) => {
// const store = usePlayersStore();
// if (from.name === 'home' && to.name === 'config') return;
// if (!store.enoughPlayers && to.name !== 'home') return { name: 'home' };
// });

export default router;
