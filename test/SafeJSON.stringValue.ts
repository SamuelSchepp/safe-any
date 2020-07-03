import { Any } from "../lib/Any";
import assert from "assert";

describe("SafeAny.stringValue()", () => {
  it("should return \"hello, world\" from string", () => {
    const sj = new Any("hello, world");
    assert.deepStrictEqual(sj.stringValue(), "hello, world");
  });
  it("should return \"hello, world\" from String", () => {
    const sj = new Any(String("hello, world"));
    assert.deepStrictEqual(sj.stringValue(), "hello, world");
  });
  it("should return \"123.45\" from number", () => {
    const sj = new Any(123.45);
    assert.deepStrictEqual(sj.stringValue(), "123.45");
  });
  it("shoule return \"123.45\" from Number", () => {
    const sj = new Any(Number(123.45));
    assert.deepStrictEqual(sj.stringValue(), "123.45");
  });
  it("should return \"false\" from boolean", () => {
    const sj = new Any(false);
    assert.deepStrictEqual(sj.stringValue(), "false");
  });
  it("should return \"true\" from Boolean", () => {
    const sj = new Any(Boolean(true));
    assert.deepStrictEqual(sj.stringValue(), "true");
  });
  it("should return \"\" from dictionary", () => {
    const sj = new Any({ hello: "world" });
    assert.deepStrictEqual(sj.stringValue(), "");
  });
  it("should return \"\" from array", () => {
    const sj = new Any(["hello", "world"]);
    assert.deepStrictEqual(sj.stringValue(), "");
  });
  it("should return \"\" from null", () => {
    const sj = new Any(null);
    assert.deepStrictEqual(sj.stringValue(), "");
  });
  it("should return \"\" from undefined", () => {
    const sj = new Any(undefined);
    assert.deepStrictEqual(sj.stringValue(), "");
  });
  it("should return \"\" from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new Any(func);
    assert.deepStrictEqual(sj.stringValue(), "");
  });
});
