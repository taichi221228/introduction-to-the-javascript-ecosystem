<script setup lang="ts">
import { type PropType, ref } from "vue";

const props = defineProps({
  items: Array as PropType<{ name: string; path: string }[]>,
  hasEtc: {
    type: Boolean,
    default: true,
  },
});

const items = ref(props.items);
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.path" class="relative !pl-8">
      <div
        class="absolute top-1/2 left-0 flex justify-center items-center w-6 h-6 -translate-y-1/2"
      >
        <img :src="item.path" :alt="item.name" class="max-h-full" />
      </div>
      {{ item.name }}
    </li>
  </ul>
  <div v-if="hasEtc">
    <br />

    etc
  </div>
</template>
