
import { facts as myFacts } from '$lib/filters/fact';
import { Squares as peerSqaures } from 'peer-filter-c00303423';

export function combinedFilter(xs: number[]): number[] {
  const afterMine = myFacts(xs);
  return peerSqaures(afterMine);
}
