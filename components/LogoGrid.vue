<script setup lang="ts">
import { type PropType, ref } from "vue";

const props = defineProps({
  items: Array as PropType<{ name: string; path: string }[]>,
});

const items = ref(props.items);
</script>

<template>
  <ul class="grid grid-cols-7 items-center gap-y-4">
    <li v-for="item in items" :key="item.path" class="p-0 m-0 list-none">
      <img :src="item.path" :alt="item.name" class="w-22 mx-auto" />
    </li>
  </ul>
</template>
