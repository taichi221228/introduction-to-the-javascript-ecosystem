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
      <img
        :src="item.path"
        :alt="item.name"
        class="absolute top-1/2 left-0 w-6 -translate-y-1/2"
      />
      {{ item.name }}
    </li>
  </ul>
  <div v-if="hasEtc">

    <br />

    etc
  </div v-if>
</template>
