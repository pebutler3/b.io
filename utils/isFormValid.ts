export const isFormValid = (authForm: AuthForm, isLoginForm?: boolean) => {
  const username = authForm.username;
  const password = authForm.password;
  const favoriteBook = authForm.favoriteBook;

  if (username && password && favoriteBook) {
    return true;
  }

  if (username && password && isLoginForm) {
    return true;
  }

  return false;
}