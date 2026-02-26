import { execSync } from "child_process";
import { describe, it, expect } from "vitest";

describe("E2E: application flow", () => {
  it("should output correct results", () => {
    const output = execSync("node app.js").toString();
    expect(output).toContain("Discount result: 90");
    expect(output).toContain("Grade result: B");
  });
});