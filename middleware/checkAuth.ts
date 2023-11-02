import { useAuth } from '../composables/useAuth';

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn()) {
    return navigateTo({ path: '/dashboard' })
  }
})