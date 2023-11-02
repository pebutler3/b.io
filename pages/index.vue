<script setup lang="ts">
import AuthForm from '@/components/AuthForm/AuthForm.vue';

definePageMeta({ middleware: 'check-auth' })

const books = useBooks();

const initialForm: AuthForm = {
  username: '',
  password: '',
  favoriteBook: '',
  errors: {
    username: '',
    password: '',
    favoriteBook: '',
  },
}

const authForm: Ref<AuthForm> = ref(initialForm);
const formType = ref('signup');
</script>

<template>
  <AuthForm
    :authForm="authForm"
    :formType="formType"
    :books="books"
    @auth-form:SubmitSignup="useSignUp(authForm)"
    @auth-form:Signup="formType = 'signup'"
    @auth-form:Login="formType = 'login'"
    @auth-form:SubmitLogin="useLogin(authForm)"
  />
</template>