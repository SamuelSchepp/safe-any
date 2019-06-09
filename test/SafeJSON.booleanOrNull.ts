import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";

describe("SafeJSON", () => {
    describe("booleanOrNull()", () => {
        it("should return null from string", () => {
            const sj = new SafeJSON("hello, world");
            assert.deepEqual(sj.booleanOrNull(), null);
        });
        it("should return null from String", () => {
            const sj = new SafeJSON(String("hello, world"));
            assert.deepEqual(sj.booleanOrNull(), null);
        });
        it("should return true from parsable string", () => {
            const sj = new SafeJSON("true");
            assert.deepEqual(sj.booleanOrNull(), true);
        });
        it("should return false from parsable String", () => {
            const sj = new SafeJSON(String("false"));
            assert.deepEqual(sj.booleanOrNull(), false);
        });
        it("should return true from number", () => {
            const sj = new SafeJSON(123.45);
            assert.deepEqual(sj.booleanOrNull(), true);
        });
        it("shoule return true from Number", () => {
            const sj = new SafeJSON(Number(123.45));
            assert.deepEqual(sj.booleanOrNull(), true);
        });
        it("should return false from number", () => {
            const sj = new SafeJSON(0);
            assert.deepEqual(sj.booleanOrNull(), false);
        });
        it("shoule return false from Number", () => {
            const sj = new SafeJSON(Number(0));
            assert.deepEqual(sj.booleanOrNull(), false);
        });
        it("should return true from boolean", () => {
            const sj = new SafeJSON(true);
            assert.deepEqual(sj.booleanOrNull(), true);
        });
        it("should return false from Boolean", () => {
            const sj = new SafeJSON(Boolean(false));
            assert.deepEqual(sj.booleanOrNull(), false);
        });
        it("should return null from dictionary", () => {
            const sj = new SafeJSON({hello: "world"});
            assert.deepEqual(sj.booleanOrNull(), null);
        });
        it("should return null from array", () => {
            const sj = new SafeJSON(["hello", "world"]);
            assert.deepEqual(sj.booleanOrNull(), null);
        });
        it("should return null from null", () => {
            const sj = new SafeJSON(null);
            assert.deepEqual(sj.booleanOrNull(), null);
        });
        it("should return null from undefined", () => {
            const sj = new SafeJSON(undefined);
            assert.deepEqual(sj.booleanOrNull(), null);
        });
        it("should return null from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeJSON(func);
            assert.deepEqual(sj.booleanOrNull(), null);
        });
    });
});
