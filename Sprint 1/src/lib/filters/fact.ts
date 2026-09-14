export function fact(x: number): number {
    let i = x - 1;
    while (i != 0) {
        x *= i;
        i--;
    }

    if (x = 0) {
        return 0;
    }
    else {
        return x;
    }
}

export function facts (xs: number[]): number[] {
    return xs.map(fact);
}