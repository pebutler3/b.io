<script setup lang="ts">
import { AuthProps } from './props';

const emit = defineEmits([
  'AuthForm:Signup',
  'AuthForm:SubmitSignup',
  'AuthForm:Login',
  'AuthForm:SubmitLogin',
]);

const props = defineProps(AuthProps)

const isSignupForm = () => props.formType === 'signup';
</script>

<template>
  <form :class="[isSignupForm() ? 'signup-form' : 'login-form']" @submit.prevent>
    <img src="/logo.png" />
    <label for="username">
      Username
      <em v-if="authForm.errors.username">{{ authForm.errors.username }}</em>
      <input
        type="text"
        id="username"
        v-model="authForm.username"
        @input="validateField('username', authForm)"
        autocomplete="off"
        required
      >
    </label>
    <label for="password">
      Password
      <em v-if="authForm.errors.password">{{ authForm.errors.password }}</em>
      <input
        type="password"
        name="password"
        id="password"
        v-model="authForm.password"
        @input="validateField('password', authForm)"
        required
      >
    </label>
    <template v-if="isSignupForm()">
      <em v-if="authForm.errors.favoriteBook">{{ authForm.errors.favoriteBook }}</em>
      <select
        name="favorite-book"
        id="favorite-book"
        v-model="authForm.favoriteBook"
        @change="validateField('favoriteBook', authForm)"
        required
      >
        <option value="" disabled>Select your favorite book</option>
        <option v-for="book in books" :value="book.id">{{ book.title }}</option>
      </select>
    </template>
    <div class="signup-form__buttons">
      <template v-if="isSignupForm()">
        <button @click="emit('AuthForm:SubmitSignup')">Submit</button>
        <button @click="emit('AuthForm:Login')">Log In</button>
      </template>
      <template v-else>
        <button @click="emit('AuthForm:SubmitLogin')">Submit</button>
        <button @click="emit('AuthForm:Signup')">Signup</button>
      </template>
    </div>
  </form>
</template>

<style lang="scss">
@use './authForm';
</style>