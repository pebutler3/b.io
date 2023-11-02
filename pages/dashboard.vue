<script setup lang="ts">
import { clearUserFromLocalStorage, getUserFromLocalStorage } from '@/composables/useLocalStorage';

const books = useBooks();
const activeBook = ref<Book | null>(null);
const currentUser = ref(null);
const showFavorites = ref(false);
const favorite = ref();

const setActiveBook = (book: Book | null) => activeBook.value = book;

if (process.client) {
  currentUser.value = getUserFromLocalStorage()?.username?.toUpperCase();

  if (!getUserFromLocalStorage().username) {
    navigateTo({ path: '/' });
  }

  favorite.value = books.value.find((book: Book) => book.id === getUserFromLocalStorage()?.favoriteBook);
}
</script>

<template>
  <div class="dashboard">
    <header>
      <client-only>
        <h1>Welcome, {{ currentUser }}</h1>
      </client-only>
      <button @click="showFavorites = !showFavorites">{{ !showFavorites ? 'Show Favories' : 'Show All' }}</button>
      <button @click="clearUserFromLocalStorage()">Logout</button>
    </header>
    <div class="books" style="display: flex;">
      <template v-if="showFavorites">
        <figure class="books__book-card">
          <img :src="favorite?.cover_url" />
          <h2>{{ favorite?.title }}</h2>
        </figure>
      </template>
      <template v-else>
        <figure
          class="books__book-card"
          :class="{ favorite : book.id === favorite?.id }"
          v-for="book in books" @click="setActiveBook(book)"
        >
          <img :src="book.cover_url" />
          <h2>{{ book.title }}</h2>
        </figure>
      </template>
      <flyout
        :activeBook="activeBook"
        @close-flyout="setActiveBook(null)"
        v-if="activeBook"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/colors' as color;
@use '@/assets/mixins' as mixin;
@use '@/assets/books';

header {
  background-color: color.$purple;
  color: color.$white;
  display: flex;
  padding: 0 4rem;
  justify-content: space-between;

  button {
    @include mixin.button(color.$white, color.$purple);
    align-self: center;

    &:first-of-type {
      margin-left: auto;
      margin-right: 1rem;
    }
  }
}

.favorite {

  &::after {
    content: '❤️';
    position: absolute;
    top: 0;
    right: 0;
    font-size: 2rem;
    color: transparent;
    text-shadow: 0 0 0 color.$red;
  }
}
</style>