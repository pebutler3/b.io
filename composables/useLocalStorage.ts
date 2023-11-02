export const setUserToLocalStorage = (authForm: AuthForm) => {
  localStorage.setItem('user', JSON.stringify({
    username: authForm.username,
    favoriteBook: authForm.favoriteBook
  }));
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return JSON.parse(user || '{}');
}

export const clearUserFromLocalStorage = () => {
  localStorage.removeItem('user');
  navigateTo({ path: '/' });
}