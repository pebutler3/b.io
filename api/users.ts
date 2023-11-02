const useFetchPost = async (path: string, body: object) => {
  try {
    const { data } = await useFetch(path, {
      method: 'POST',
      body,
    });

    return data.value;
  } catch (error) {
    console.log('Error in useFetchPost', error); 
  }
}

export const createUser = async (username: string, password: string) => await useFetchPost('/api/users/new', { username, password });
export const addUserFavorite = (username: string, book: string | null | undefined) => useFetchPost(`/api/users/${username}/favorites`, { username, book })
export const userLogin = (username: string, password: string) => useFetchPost('/api/login', { username, password });
export const getUserFavorites = (username: string) => useFetch(`/api/users/${username}/favorites`);