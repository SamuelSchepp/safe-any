import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny.parsed()", () => {
  it("should return \"world\" from embedded json string", () => {
    const obj = {
      jsonString: "{ \"hello\": \"world\" }",
    };
    const safeObject = new SafeAny(obj);
    assert.deepStrictEqual(safeObject.get("jsonString").parsed().get("hello").stringValue(), "world");
  });
  it("should return 312 from non-existing embedded json string", () => {
    const obj = {
      jsonString: 312,
    };
    const safeObject = new SafeAny(obj);
    assert.deepStrictEqual(safeObject.get("jsonString").parsed().numberValue(), 312);
  });
  it("should return \"test\" from badly formatted embedded json string", () => {
    const obj = {
      jsonString: "test",
    };
    const safeObject = new SafeAny(obj);
    assert.deepStrictEqual(safeObject.get("jsonString").parsed().stringValue(), "test");
  });
});
