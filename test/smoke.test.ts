import { describe, it, expect } from "vitest";
import { VERSION } from "../src/index";

describe("smoke test", () => {
  it("exports package version 0.0.0", () => {
    expect(VERSION).toBe("0.0.0");
  });
});
