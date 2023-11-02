<script setup lang="ts">
const storeBooks = useBooks();

const { data } = await useFetch('/api/books');
const { books } = (data.value as { data: { books: Book[] } }).data;

storeBooks.value = await books;
</script>

<template>
  <NuxtPage />
</template>

<style lang="scss">
@use '@/assets/colors' as color;
@use '@/assets/variables' as var;

body {
  color: color.$charcoal;
  font-family: var.$globalFont;
  margin: 0;
}
</style>
