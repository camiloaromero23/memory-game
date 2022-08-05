<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  click: Function as PropType<() => void>,
  disabled: Boolean,
  text: String,
});
</script>

<template>
  <button
    @click="props.click"
    :disabled="disabled"
    class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:from-lime-500 disabled:via-lime-600 disabled:to-lime-800 disabled:hover:none"
  >
    {{ text }}
  </button>
</template>
