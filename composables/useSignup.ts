import { addUserFavorite, createUser } from '@/api/users';
import { isFormValid } from '@/utils/isFormValid';
import { success } from '@/utils/successMessage';

export const useSignUp = async (authForm: AuthForm) => {
  if (isFormValid(authForm)) {
    const { message } = await createUser(authForm.username, authForm.password) as ResponseMessage;

    if (success(message)) {
      await addUserFavorite(authForm.username, authForm.favoriteBook);
      localStorage.setItem('user', JSON.stringify({ username: authForm.username, favoriteBook: authForm.favoriteBook }))
      navigateTo({ path: '/dashboard' });
    }
  }
};