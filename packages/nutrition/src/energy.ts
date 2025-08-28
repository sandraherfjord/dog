export function rer(kg: number): number {
  return 70 * kg ** 0.75;
}

export function der(kg: number, multiplier: number): number {
  return rer(kg) * multiplier;
}
