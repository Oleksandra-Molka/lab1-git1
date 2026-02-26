import { describe, it, expect } from "vitest";
import { calculateDiscount, grade } from "../src/logic.js";

describe("calculateDiscount", () => {
  it("returns full price when not student", () => {
    expect(calculateDiscount(100, false)).toBe(100);
  });

  it("applies 10% discount for student", () => {
    expect(calculateDiscount(100, true)).toBe(90);
  });

  it("works with zero", () => {
    expect(calculateDiscount(0, true)).toBe(0);
  });

  it("throws error for negative total", () => {
    expect(() => calculateDiscount(-5, true)).toThrow();
  });
});

describe("grade", () => {
  it("returns A for 95", () => {
    expect(grade(95)).toBe("A");
  });

  it("returns B for 80", () => {
    expect(grade(80)).toBe("B");
  });

  it("returns F for 20", () => {
    expect(grade(20)).toBe("F");
  });
});