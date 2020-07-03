import { Any } from "../lib/Any";
import { Type } from "../lib/Type";
import assert from "assert";

describe("SafeAny.type", () => {
  it("should return Type.string", () => {
    assert.deepStrictEqual(new Any("test").type, Type.string);
  });
  it("should return Type.number", () => {
    assert.deepStrictEqual(new Any(123.435).type, Type.number);
  });
  it("should return Type.boolean", () => {
    assert.deepStrictEqual(new Any(false).type, Type.boolean);
  });
  it("should return Type.array", () => {
    assert.deepStrictEqual(new Any([1, 2, 3]).type, Type.array);
  });
  it("should return Type.dictionary", () => {
    assert.deepStrictEqual(new Any({ key: "value" }).type, Type.dictionary);
  });
  it("should return Type.null", () => {
    assert.deepStrictEqual(new Any(null).type, Type.null);
  });
  it("should treat a class instance like an dictionary", () => {
    class MyClass {
      public constructor(public field: string) {
      }
    }

    const obj = new MyClass("test");
    const safeAny = new Any(obj);
    assert.deepStrictEqual(safeAny.type, Type.dictionary);
    assert.deepStrictEqual(safeAny.get("field").stringValue(), "test");
  });
});
