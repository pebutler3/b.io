
declare module 'vue/types/vue' {
  interface Vue {
    $book: Book;
    $authForm: AuthForm;
  }
}

interface Book {
  id: string,
  title: string,
  author: string,
  cover_url: string,
  description: string,
  isFavorite?: boolean,
}

interface Favorites {
  book: Object
}

interface ResponseMessage {
  message: string,
};

type Field = 'username' | 'password' | 'favoriteBook';

interface SignupForm {
  username: string;
  password: string;
  favoriteBook: string | null;
  errors: Record<Field, string | null>,
}

interface AuthForm {
  username: string;
  password: string;
  favoriteBook?: string | null;
  errors: Record<Field, string | null>,
}