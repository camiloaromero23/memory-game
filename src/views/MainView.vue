<script setup lang="ts">
import RestartGameButton from '@/components/RestartGameButton.vue';
</script>

<template>
  <div class="bg-slate-900 h-screen text-white p-12">
    <RouterView />
    <RestartGameButton />
  </div>
</template>
