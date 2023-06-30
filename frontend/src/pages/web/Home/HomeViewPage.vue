<template>
  <q-page padding class="bg-primary">
    <div class="q-px-xl bg-accent shadow-1 rounded-borders">
      <q-carousel
        v-model="activeIndex"
        :height="slideHeight"
        :arrows="showArrows"
        :autoplay="autoplay"
        :autoplay-interval="autoplayInterval"
        :infinite="infiniteScroll"
        :transition-prev="transitionPrev"
        :transition-next="transitionNext"
      >
        <q-carousel-slide
          v-for="(card, index) in cardList"
          :name="index"
          :key="index"
          :img-src="card.imageUrl"
          :caption="card.caption"
        >
          <div class="slide-content">
            <!-- Customize the content of each card slide here -->
            <h2 class="slide-title">{{ card.title }}</h2>
            <p class="slide-description">{{ card.description }}</p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

defineComponent({
  name: 'HomeViewPage',
});

const activeIndex = ref(0);
const cardList = [
  {
    imageUrl: 'https://picsum.photos/900/800',
    caption: 'Slide 1',
    title: 'Card 1',
    description: 'Description for Card 1',
  },
  {
    imageUrl: 'https://picsum.photos/900/700',
    caption: 'Slide 2',
    title: 'Card 2',
    description: 'Description for Card 2',
  },
  // Add more card objects as needed
];
const slideHeight = '300px'; // Adjust the height of the card slides
const showArrows = true; // Set to false if you don't want to show navigation arrows
const autoplay = true; // Set to false if you don't want auto play
const autoplayInterval = 3000; // Set the interval for auto play
const infiniteScroll = true; // Set to false if you don't want infinite scrolling
const transitionPrev = 'slide-prev'; // Customize the transition for previous slide
const transitionNext = 'slide-next';
</script>
