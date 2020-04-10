import assert from "assert";
import { Tool } from "../lib/Tool";

describe("Tool.isDictionary", () => {
    it("should return false from \"hello\"", () => {
        assert.deepStrictEqual(Tool.isDictionary("hello"), false);
    });
    it("should return true from {}", () => {
        assert.deepStrictEqual(Tool.isDictionary({}), true);
    });
    it("should return false from []", () => {
        assert.deepStrictEqual(Tool.isDictionary([]), false);
    });
    it("should return false from null", () => {
        assert.deepStrictEqual(Tool.isDictionary(null), false);
    });
    it("should return false from undefined", () => {
        assert.deepStrictEqual(Tool.isDictionary(undefined), false);
    });
    it("should return true from Date", () => {
        assert.deepStrictEqual(Tool.isDictionary(new Date(2)), true);
    });
    it("should return true from custom class", () => {
        class Test { }
        assert.deepStrictEqual(Tool.isDictionary(new Test()), true);
    });
});
