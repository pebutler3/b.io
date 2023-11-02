import { describe, expect, test } from 'vitest';
import { isFormValid } from '../isFormValid';

describe('isFormValid Utility', () => {
  test('Form is valid when all fields are filled', () => {
    const authForm: AuthForm = {
      username: 'john_doe',
      password: 'password123',
      favoriteBook: '123-4132',
      errors: {
        username: null,
        password: null,
        favoriteBook: null,
      },
    };

    const result = isFormValid(authForm);
    expect(result).toBe(true);
  });

  test('Form is not valid when one field is empty', () => {
    const authForm: AuthForm = {
      username: 'john_doe',
      password: 'password123',
      favoriteBook: null,
      errors: {
        username: null,
        password: null,
        favoriteBook: null,
      },
    };

    const result = isFormValid(authForm);
    expect(result).toBe(false);
  });
})