import { describe, it, expect } from 'vitest';
import { diffrences } from './diff';

describe('Diff filter', () => {
    it('Outputs diffrence between current and previous elements', () => {
        const input = [1, 3, 5, 7, 9, 999];
        const expected = [1, 2, 2, 2, 2, 990];
        expect(diffrences(input)).toEqual(expected);
    });
});