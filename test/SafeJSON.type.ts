import assert from "assert";
import { SafeAny } from "../lib/SafeAny";
import { Type } from "../lib/Type";

describe("SafeAny.type", () => {
  it("should return Type.string", () => {
    assert.deepStrictEqual(new SafeAny("test").type, Type.string);
  });
  it("should return Type.number", () => {
    assert.deepStrictEqual(new SafeAny(123.435).type, Type.number);
  });
  it("should return Type.boolean", () => {
    assert.deepStrictEqual(new SafeAny(false).type, Type.boolean);
  });
  it("should return Type.array", () => {
    assert.deepStrictEqual(new SafeAny([1, 2, 3]).type, Type.array);
  });
  it("should return Type.dictionary", () => {
    assert.deepStrictEqual(new SafeAny({ key: "value" }).type, Type.dictionary);
  });
  it("should return Type.null", () => {
    assert.deepStrictEqual(new SafeAny(null).type, Type.null);
  });
  it("should treat a class instance like an dictionary", () => {
    class MyClass {
      public constructor(public field: string) {
      }
    }

    const obj = new MyClass("test");
    const safeAny = new SafeAny(obj);
    assert.deepStrictEqual(safeAny.type, Type.dictionary);
    assert.deepStrictEqual(safeAny.get("field").stringValue(), "test");
  });
});
