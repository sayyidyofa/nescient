
export function calculateThreshold(op: "/" | "*", cj: number, beta: number): number {
    return op === "/" ? cj/beta : cj*beta;
}

export function isThereAnAttack(N1: boolean, N2: boolean, N3: boolean, N4: boolean): boolean {
    return N1 && N2 && N3 && N4;
}

export function calculateCj(meanValue: number, varianceValue: number): number {
    return meanValue + varianceValue;
}
