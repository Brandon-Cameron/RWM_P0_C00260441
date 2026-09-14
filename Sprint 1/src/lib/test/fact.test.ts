import { describe, it, expect } from "vitest";
import { facts } from "$lib/filters";

describe('Fact Filter', () => {
    it('factorials a sequence', () => {
        const input = [1, 3, 4, 5, 9, 12];
        const expected = [1, 6, 24, 120, 362880, 479001600]
        expect(facts(input)).toEqual(expected);
    });
});