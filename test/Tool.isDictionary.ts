import assert from "assert";
import { Tool } from "../lib/Tool";

describe("Tool", () => {
    describe("isDictionary", () => {
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
    });
});
