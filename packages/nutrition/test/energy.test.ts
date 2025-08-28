import { describe, expect, it } from 'vitest';
import { rer } from '../src/energy';

describe('energy', () => {
  it('calculates RER for a 10kg dog', () => {
    expect(rer(10)).toBeCloseTo(394.3, 0);
  });
});
