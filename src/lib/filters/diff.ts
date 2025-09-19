let previous: number = 0;

export function diff (current: number): number {
    let result: number = Math.abs(current - previous)

    previous = current;

    return result;
}

export function diffrences (arr: number[]): number[] {
    return arr.map(diff);
}