import { usePlayersStore } from '@/stores/players';
import { useRoute, useRouter } from 'vue-router';

export const useRestartGame = () => {
  const store = usePlayersStore();
  const router = useRouter();
  const route = useRoute();

  const restart = () => {
    store.$reset();
    router.push({ name: 'home' });
  };

  return {
    restart,
    route,
  };
};
