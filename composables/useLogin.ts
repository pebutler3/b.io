import { isFormValid } from '@/utils/isFormValid';
import { getUserFavorites, userLogin } from '@/api/users';

export const useLogin = async (authForm: AuthForm) => {
  if (isFormValid(authForm, true)) {
    const { message } = await userLogin(authForm.username, authForm.password) as ResponseMessage;

    if (success(message)) {
      const { data } = await getUserFavorites(authForm.username);
      const { favorites } = (data.value as { data: { favorites: Favorites } }).data;
      const favoriteBook = favorites.book;

      localStorage.setItem('user', JSON.stringify({ username: authForm.username, favoriteBook }))
      navigateTo({ path: '/dashboard' });
    }
  }
}