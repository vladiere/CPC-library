<template>
  <q-layout view="hhh lpR lFf">
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      elevated
      style="background-color: #44496b"
    >
      <!-- drawer content -->
    </q-drawer>
    <q-page-container style="background-color: #44496b">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

defineComponent({
  name: 'SideLayout',
});

const leftDrawerOpen = ref(true);
</script>
