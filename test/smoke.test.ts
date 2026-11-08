import { describe, it, expect } from "vitest";
import { VERSION } from "../src/index";

describe("smoke test", () => {
  it("exports package version 0.1.0", () => {
    expect(VERSION).toBe("0.1.0");
  });
});
