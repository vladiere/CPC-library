<template>
  <q-item clickable @click="gotoRoutes(link)">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

export interface BrowseLinksProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<BrowseLinksProps>(), {
  caption: '',
  link: '#',
  icon: '',
});

const router = useRouter();

const gotoRoutes = (link: string) => {
  router.push(link);
};
</script>
