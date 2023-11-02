export const useBooks = () => useState<Book[]>('books', () => []);
