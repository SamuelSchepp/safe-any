import { Any } from "../lib/Any";
import assert from "assert";

describe("SafeAny.stringOrNull()", () => {
  it("should return \"hello, world\" from string", () => {
    const sj = new Any("hello, world");
    assert.deepStrictEqual(sj.stringOrNull(), "hello, world");
  });
  it("should return \"hello, world\" from String", () => {
    const sj = new Any(String("hello, world"));
    assert.deepStrictEqual(sj.stringOrNull(), "hello, world");
  });
  it("should return \"123.45\" from number", () => {
    const sj = new Any(123.45);
    assert.deepStrictEqual(sj.stringOrNull(), "123.45");
  });
  it("shoule return \"123.45\" from Number", () => {
    const sj = new Any(Number(123.45));
    assert.deepStrictEqual(sj.stringOrNull(), "123.45");
  });
  it("should return \"true\" from boolean", () => {
    const sj = new Any(true);
    assert.deepStrictEqual(sj.stringOrNull(), "true");
  });
  it("should return \"false\" from Boolean", () => {
    const sj = new Any(Boolean(false));
    assert.deepStrictEqual(sj.stringOrNull(), "false");
  });
  it("should return null from dictionary", () => {
    const sj = new Any({ hello: "world" });
    assert.deepStrictEqual(sj.stringOrNull(), null);
  });
  it("should return null from array", () => {
    const sj = new Any(["hello", "world"]);
    assert.deepStrictEqual(sj.stringOrNull(), null);
  });
  it("should return null from null", () => {
    const sj = new Any(null);
    assert.deepStrictEqual(sj.stringOrNull(), null);
  });
  it("should return null from undefined", () => {
    const sj = new Any(undefined);
    assert.deepStrictEqual(sj.stringOrNull(), null);
  });
  it("should return null from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new Any(func);
    assert.deepStrictEqual(sj.stringOrNull(), null);
  });
});
