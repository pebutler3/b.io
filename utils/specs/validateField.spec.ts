import { describe, expect, test} from 'vitest';
import { validateField } from '../validateField';

describe('validateField Utility', () => {
  test('validateField should set an error message when the field is empty', () => {
    const field = 'username';
    const authForm: AuthForm = {
      username: '',
      password: 'secret',
      favoriteBook: 'book',
      errors: {
        username: '',
        password: '',
        favoriteBook: '',
      },
    };

    validateField(field, authForm);
    expect(authForm.errors.username).toBe('username is required');
  });

  test('validateField should not set an error message when the field is not empty', () => {
    const field = 'password';
    const authForm: AuthForm = {
      username: 'user',
      password: 'secret',
      favoriteBook: 'book',
      errors: {
        username: '',
        password: '',
        favoriteBook: '',
      },
    };

    validateField(field, authForm);
    expect(authForm.errors.password).toBe('');
  });
});