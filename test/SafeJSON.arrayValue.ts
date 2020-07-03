import { Any } from "../lib/Any";
import assert from "assert";

describe("SafeAny.arrayValue()", () => {
  it("should return [] from string", () => {
    const sj = new Any("hello, world");
    assert.deepStrictEqual(sj.arrayValue(), []);
  });
  it("should return [] from String", () => {
    const sj = new Any(String("hello, world"));
    assert.deepStrictEqual(sj.arrayValue(), []);
  });
  it("should return [] from number", () => {
    const sj = new Any(123.45);
    assert.deepStrictEqual(sj.arrayValue(), []);
  });
  it("shoule return [] from Number", () => {
    const sj = new Any(Number(123.45));
    assert.deepStrictEqual(sj.arrayValue(), []);
  });
  it("should return [] from boolean", () => {
    const sj = new Any(true);
    assert.deepStrictEqual(sj.arrayValue(), []);
  });
  it("should return [] from Boolean", () => {
    const sj = new Any(Boolean(true));
    assert.deepStrictEqual(sj.arrayValue(), []);
  });
  it("should return [] from dictionary", () => {
    const sj = new Any({ hello: "world" });
    assert.deepStrictEqual(sj.arrayValue(), []);
  });
  it("should return [\"hello\", \"world\"] from array", () => {
    const sj = new Any(["hello", "world"]);
    const a = sj.arrayValue();
    assert.deepStrictEqual(a[0].stringOrNull(), "hello");
    assert.deepStrictEqual(a[1].stringOrNull(), "world");
  });
  it("should return [] from null", () => {
    const sj = new Any(null);
    assert.deepStrictEqual(sj.arrayValue(), []);
  });
  it("should return [] from undefined", () => {
    const sj = new Any(undefined);
    assert.deepStrictEqual(sj.arrayValue(), []);
  });
  it("should return [] from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new Any(func);
    assert.deepStrictEqual(sj.arrayValue(), []);
  });
});
