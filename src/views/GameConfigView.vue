<script setup lang="ts">
import CreateButton from '@/components/CreateButton.vue';
import { useNewPlayer } from '@/composables/useNewPlayer';
import { usePlayersStore } from '@/stores/players';
import TitleHeading from '../components/TitleHeading.vue';

const store = usePlayersStore();
const {
  create,
  handleSelect,
  isPlayersCountSelected,
  playerName,
  playersCount,
  title,
} = useNewPlayer();
</script>
<template>
  <TitleHeading :text="title" />
  <template v-if="!isPlayersCountSelected">
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="number"
      v-model="playersCount"
    />
    <CreateButton :click="handleSelect" text="Set players" />
  </template>
  <template v-else>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      v-model="playerName"
    />

    <CreateButton
      :click="create"
      text="Add New Player"
      :disabled="store.createdPlayers === playersCount"
    />
    <div v-if="store.playerAlreadyExists">Player already exists</div>
    <h1>Players: {{ store.createdPlayers }}/{{ playersCount }}</h1>
    <br />
    <h2 v-for="{ name } in store.players" :key="name">
      {{ name }}
    </h2>
  </template>
</template>
