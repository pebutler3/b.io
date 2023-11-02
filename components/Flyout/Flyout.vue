<script setup lang="ts">
import { FlyoutProps } from './props';

const emit = defineEmits(['close-flyout']);

const props = defineProps(FlyoutProps);
</script>

<template>
  <template v-if="props.activeBook?.id">
    <div class="flyout">
      <button class="flyout__close-button" @click="emit('close-flyout')">x</button>
      <figure>
        <div
          class="flyout__figure-image-container"
          :style="{
              backgroundImage: `url(${props.activeBook.cover_url})`
            }"
          />
        <div class="flyout__figure-title-author">
          <h2>{{ props.activeBook.title }}</h2>
          <em>{{ props.activeBook.author }}</em>
        </div>
        <p>{{ props.activeBook.description }}</p>
      </figure>
    </div>
    <div class="flyout__overlay" @click="emit('close-flyout')" />
  </template>
</template>

<style lang="scss">
@use './flyout';
</style>
