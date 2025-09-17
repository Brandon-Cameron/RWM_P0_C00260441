import { diffrences as diff } from "../filters/diff";
import { removeOddNumbers } from 'peer-filter-c87654321/src/lib/filters'

export function combinedFilter(xs: number[]): number[] {
    let firstPass = removeOddNumbers(xs);

    return diff(firstPass);
}