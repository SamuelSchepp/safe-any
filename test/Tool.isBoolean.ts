import assert from "assert";
import { Tool } from "../lib/Tool";

describe("Tool", () => {
    describe("isBoolean", () => {
        it("should return false from \"hello\"", () => {
            assert.deepEqual(Tool.isBoolean("hello"), false);
        });
        it("should return false from String(\"hello\")", () => {
            assert.deepEqual(Tool.isBoolean(String("hello")), false);
        });
        it("should return false from 1", () => {
            assert.deepEqual(Tool.isBoolean(1), false);
        });
        it("should return false from Number(1)", () => {
            assert.deepEqual(Tool.isBoolean(Number(1)), false);
        });
        it("should return true from true", () => {
            assert.deepEqual(Tool.isBoolean(true), true);
        });
        it("should return true from Boolean(true)", () => {
            assert.deepEqual(Tool.isBoolean(Boolean(true)), true);
        });
        it("should return false from null", () => {
            assert.deepEqual(Tool.isBoolean(null), false);
        });
    });
});
