import { SafeAny } from "../lib/SafeAny";
import assert from "assert";

describe("SafeAny.arrayOrNull()", () => {
  it("should return null from string", () => {
    const sj = new SafeAny("hello, world");
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from String", () => {
    const sj = new SafeAny(String("hello, world"));
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from number", () => {
    const sj = new SafeAny(123.45);
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("shoule return null from Number", () => {
    const sj = new SafeAny(Number(123.45));
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from boolean", () => {
    const sj = new SafeAny(true);
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from Boolean", () => {
    const sj = new SafeAny(Boolean(true));
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from dictionary", () => {
    const sj = new SafeAny({ hello: "world" });
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return [\"hello\", \"world\"] from array", () => {
    const sj = new SafeAny(["hello", "world"]);
    const a = sj.arrayOrNull();
    if (a === null) {
      assert.fail();
    } else {
      assert.deepStrictEqual(a[0].stringOrNull(), "hello");
      assert.deepStrictEqual(a[1].stringOrNull(), "world");
    }
  });
  it("should return null from null", () => {
    const sj = new SafeAny(null);
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from undefined", () => {
    const sj = new SafeAny(undefined);
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new SafeAny(func);
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
});
