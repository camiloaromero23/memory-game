import { useRouter } from 'vue-router';

export const useNewGame = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push({ name: 'config' });
  };

  return { handleClick };
};
