import { describe, expect, test } from 'vitest';
import { success } from '../successMessage';

describe('successMessage Utility', () => {
  test('should return true for "success"', () => {
    const message = 'success';
    const result = success(message);

    expect(result).toBe(true);
  });

  test('should return false for other messages', () => {
    const message = 'error'; // anything other than success
    const result = success(message);

    expect(result).toBe(false);
  });
});