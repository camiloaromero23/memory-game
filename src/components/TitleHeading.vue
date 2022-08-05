<script setup lang="ts">
const props = defineProps({ text: String });
</script>

<template>
  <h1 class="text-3xl font-bold pb-12">{{ props.text }}</h1>
</template>
