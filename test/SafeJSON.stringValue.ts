import { SafeAny } from "../lib/SafeAny";
import assert from "assert";

describe("SafeAny.stringValue()", () => {
  it("should return \"hello, world\" from string", () => {
    const sj = new SafeAny("hello, world");
    assert.deepStrictEqual(sj.stringValue(), "hello, world");
  });
  it("should return \"hello, world\" from String", () => {
    const sj = new SafeAny(String("hello, world"));
    assert.deepStrictEqual(sj.stringValue(), "hello, world");
  });
  it("should return \"123.45\" from number", () => {
    const sj = new SafeAny(123.45);
    assert.deepStrictEqual(sj.stringValue(), "123.45");
  });
  it("shoule return \"123.45\" from Number", () => {
    const sj = new SafeAny(Number(123.45));
    assert.deepStrictEqual(sj.stringValue(), "123.45");
  });
  it("should return \"false\" from boolean", () => {
    const sj = new SafeAny(false);
    assert.deepStrictEqual(sj.stringValue(), "false");
  });
  it("should return \"true\" from Boolean", () => {
    const sj = new SafeAny(Boolean(true));
    assert.deepStrictEqual(sj.stringValue(), "true");
  });
  it("should return \"\" from dictionary", () => {
    const sj = new SafeAny({ hello: "world" });
    assert.deepStrictEqual(sj.stringValue(), "");
  });
  it("should return \"\" from array", () => {
    const sj = new SafeAny(["hello", "world"]);
    assert.deepStrictEqual(sj.stringValue(), "");
  });
  it("should return \"\" from null", () => {
    const sj = new SafeAny(null);
    assert.deepStrictEqual(sj.stringValue(), "");
  });
  it("should return \"\" from undefined", () => {
    const sj = new SafeAny(undefined);
    assert.deepStrictEqual(sj.stringValue(), "");
  });
  it("should return \"\" from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new SafeAny(func);
    assert.deepStrictEqual(sj.stringValue(), "");
  });
});
