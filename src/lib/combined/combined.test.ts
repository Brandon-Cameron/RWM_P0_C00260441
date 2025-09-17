import { describe, it, expect } from 'vitest';
import { combinedFilter } from './combined';

describe('combined filters', () => {
    it('Outputs diffrence between current and previous elements', () => {
        const input = [1, 2, 5, 8, 9, 1000];
        const expected = [2, 6, 992];
        expect(combinedFilter(input)).toEqual(expected);
    });
});