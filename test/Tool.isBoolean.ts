import assert from "assert";
import { Tool } from "../lib/Tool";

describe("Tool", () => {
    describe("isBoolean", () => {
        it("should return false from \"hello\"", () => {
            assert.deepStrictEqual(Tool.isBoolean("hello"), false);
        });
        it("should return false from String(\"hello\")", () => {
            assert.deepStrictEqual(Tool.isBoolean(String("hello")), false);
        });
        it("should return false from 1", () => {
            assert.deepStrictEqual(Tool.isBoolean(1), false);
        });
        it("should return false from Number(1)", () => {
            assert.deepStrictEqual(Tool.isBoolean(Number(1)), false);
        });
        it("should return true from true", () => {
            assert.deepStrictEqual(Tool.isBoolean(true), true);
        });
        it("should return true from Boolean(true)", () => {
            assert.deepStrictEqual(Tool.isBoolean(Boolean(true)), true);
        });
        it("should return false from null", () => {
            assert.deepStrictEqual(Tool.isBoolean(null), false);
        });
    });
});
