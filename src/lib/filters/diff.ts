var previous: number = 0;

export function diff (current: number): number {
    var result: number = Math.abs(current - previous)

    current = previous;

    return result;
}

export function diffrences (arr: number[]): number[] {
    return arr.map(diff);
}