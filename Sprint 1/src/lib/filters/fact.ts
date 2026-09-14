export function fact(x: number): number {
    if (x = 0) {
        return 0;
    }
    
    let i = x - 1;
    while (i != 0) {
        x *= i;
        i--;
    }
    return x;
}

export function facts (xs: number[]): number[] {
    return xs.map(fact);
}