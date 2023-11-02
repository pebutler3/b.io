import { getUserFromLocalStorage } from '@/composables/useLocalStorage';

export const useAuth = () => {
  const user = ref();

  if (process.client) {
    user.value = getUserFromLocalStorage();
  }

  const isLoggedIn = () => {
    return user.value?.username !== undefined;
  }

  return {
    isLoggedIn
  }
}