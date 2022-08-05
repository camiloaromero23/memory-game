import { ref } from 'vue';
import { usePlayersStore } from '@/stores/players';

export const useNewPlayer = () => {
  const store = usePlayersStore();

  const playerName = ref('');
  const playerNumber = ref(1);
  const playersCount = ref(0);
  const isPlayersCountSelected = ref(false);
  const title = ref('Players');

  const create = () => {
    store.createPlayer(playerName.value);
    playerName.value = '';

    if (!store.players.find((p) => p.name === playerName.value)) {
      playerNumber.value++;
    }
  };

  const handleSelect = () => {
    if (playersCount.value < 2) return;

    isPlayersCountSelected.value = true;
  };

  if (playersCount.value > 1) {
    title.value = `Choose Player #${playerNumber.value} name`;
  }

  return {
    create,
    handleSelect,
    isPlayersCountSelected,
    playersCount,
    playerName,
    title,
  };
};
