<template>
  <q-layout view="hHr lpr fFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="row items-center">
          <q-img avatar src="../assets/logo.png" style="width: 2rem" />
          <span
            :class="
              $q.platform.is.mobile
                ? 'q-mx-sm text-dark text-h6'
                : 'q-mx-xs text-dark text-h4'
            "
            >CPC
            <small
              :style="
                $q.platform.is.mobile
                  ? 'font-size: 14px !important'
                  : 'font-size: 18px !important'
              "
              >Library</small
            ></span
          >
        </q-toolbar-title>
        <div
          v-if="!$q.platform.is.mobile"
          class="bg-primary text-white row justify-center rounded-borders"
        >
          <q-input
            dark
            dense
            standout
            v-model="text"
            input-class="text-right"
            class="q-ml-md"
          >
            <template v-slot:prepend>
              <q-icon color="dark" v-if="text === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                color="dark"
                class="cursor-pointer"
                @click="text = ''"
              />
            </template>
          </q-input>

          <q-btn-dropdown
            color="dark"
            flat
            label="All"
            dropdown-icon="arrow_drop_down"
          >
            <q-list class="bg-secondary">
              <SearchLinks
                class="q-py-none"
                v-for="search in searchLinks"
                :key="search.title"
                v-bind="search"
              />
            </q-list>
          </q-btn-dropdown>
        </div>

        <q-btn-dropdown
          flat
          :label="$q.platform.is.mobile ? '' : 'Browse'"
          dropdown-icon="fas fa-regular fa-chevron-down"
          :class="$q.platform.is.mobile ? '' : 'q-mx-xl'"
          color="dark"
          @click="onMainClick"
        >
          <q-list class="bg-secondary">
            <BrowseLinks
              v-for="browse in browseLinks"
              :key="browse.title"
              v-bind="browse"
            />
          </q-list>
        </q-btn-dropdown>
        <q-btn
          dense
          flat
          round
          icon="menu"
          color="dark"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
      <hr />
      <q-toolbar v-if="$q.platform.is.mobile">
        <div class="bg-primary text-white flex flex-center q-pt-none q-pb-sm">
          <q-input
            dark
            dense
            standout
            v-model="text"
            input-class="text-right"
            class="q-ml-md"
          >
            <template v-slot:prepend>
              <q-icon color="dark" v-if="text === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                color="dark"
                class="cursor-pointer"
                @click="text = ''"
              />
            </template>
          </q-input>

          <q-btn-dropdown
            color="dark"
            flat
            label="All"
            dropdown-icon="arrow_drop_down"
          >
            <q-list class="bg-secondary">
              <SearchLinks
                class="q-py-none"
                v-for="search in searchLinks"
                :key="search.title"
                v-bind="search"
              />
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      class="bg-secondary"
      side="right"
      bordered
    >
      <q-list>
        <q-item-label
          header
          :class="
            $q.platform.is.mobile
              ? 'text-dark text-h6 text-bold'
              : 'text-dark text-h5 text-bold'
          "
        >
          CPC Library
        </q-item-label>
        <hr />
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-list>
        <q-item-label
          header
          :class="
            $q.platform.is.mobile
              ? 'text-dark text-h6 text-bold'
              : 'text-dark text-h5 text-bold'
          "
        >
          Browse
        </q-item-label>
        <hr />
        <BrowseLinks
          v-for="browse in browseLinks"
          :key="browse.title"
          v-bind="browse"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import BrowseLinks, { BrowseLinksProps } from 'components/BrowseLinks.vue';
import SearchLinks, { SearchLinksProps } from 'components/SearchLinks.vue';

const $q = useQuasar();
const text = ref('');

const browseLinks: BrowseLinksProps[] = [
  {
    title: 'All Subjects',
    icon: 'fas fa-book-open',
    link: 'all-subjects',
  },
  {
    title: 'Trending',
    icon: 'fas fa-hashtag',
    link: 'trending',
  },
  {
    title: 'Newly Added',
    icon: 'fas fa-burst',
    link: 'newly-added',
  },
  {
    title: 'Recommendations',
    icon: 'fas fa-lightbulb',
    link: 'recommendations',
  },
  {
    title: 'Format and Language',
    icon: 'fas fa-globe',
    link: 'format-and-language',
  },
];

const searchLinks: SearchLinksProps[] = [
  {
    title: 'All',
    query: 'all_book',
  },
  {
    title: 'Title',
    query: 'book_title',
  },
  {
    title: 'Author',
    query: 'author_name',
  },
  {
    title: 'Subject',
    query: 'subject',
  },
  {
    title: 'Lists',
    query: 'book_lists',
  },
];

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'My Books',
    caption: 'Books Lend, Reading Logs, Stats and Lists',
    icon: 'fas fa-book',
    link: 'my-books',
  },
  {
    title: 'Profile',
    caption: 'User Profile and Information',
    icon: 'fas fa-user',
    link: 'profile',
  },
  {
    title: 'Settings',
    caption: 'System Settings and Information',
    icon: 'chat',
    link: 'settings',
  },
  {
    title: 'Logout',
    icon: 'logout',
    link: 'logout',
  },
];

const rightDrawerOpen = ref(false);

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

const onMainClick = () => {
  console.log('Clicked on main button');
};
const onItemClick = () => {
  console.log('Clicked on an Item');
};
</script>
