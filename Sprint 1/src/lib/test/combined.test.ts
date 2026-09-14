import { describe, it, expect } from 'vitest';
import { combinedFilter } from '$lib/filters/combined';

describe('combined (mine → peer)', () => {
  it('basic sequence', () => {
    const input = [1, 2, 4, 5, 6];
    // Update expected for your two filters & agreed order
    const expected = [1, 4, 25, 121, 729];
    expect(combinedFilter(input)).toEqual(expected);
  });

  it('edge cases', () => {
    expect(combinedFilter([])).toEqual([]);
    // refine expected to your two filters:
    // expect(combinedFilter([0])).toEqual([<expected>]);
  });
});
