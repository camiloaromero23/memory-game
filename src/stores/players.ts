import { defineStore } from 'pinia';

interface Player {
  name: string;
  matchingPairsCount: number;
}

interface State {
  cards: number;
  currentPlayer: number;
  players: Player[];
  playersAmount?: number;
  playerAlreadyExists: boolean;
  winner?: number;
}

export const usePlayersStore = defineStore('players', {
  state: (): State => ({
    cards: 0,
    currentPlayer: 1,
    players: [],
    playerAlreadyExists: false,
  }),

  getters: {
    createdPlayers: ({ players }) => players.length,
    enoughPlayers: ({ players }) => players.length > 1,
  },

  actions: {
    createPlayer(name: string) {
      if (name.length === 0) return;
      if (this.players.some((player) => player.name === name)) {
        this.playerAlreadyExists = true;
        return;
      }
      this.playerAlreadyExists = false;
      const player: Player = { name, matchingPairsCount: 0 };
      this.players = [...this.players, player];
    },
  },
});
