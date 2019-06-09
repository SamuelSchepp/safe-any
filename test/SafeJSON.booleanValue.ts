import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";

describe("SafeJSON", () => {
    describe("booleanValue()", () => {
        it("should return false from string", () => {
            const sj = new SafeJSON("hello, world");
            assert.deepEqual(sj.booleanValue(), false);
        });
        it("should return false from String", () => {
            const sj = new SafeJSON(String("hello, world"));
            assert.deepEqual(sj.booleanValue(), false);
        });
        it("should return true from parsable string", () => {
            const sj = new SafeJSON("true");
            assert.deepEqual(sj.booleanValue(), true);
        });
        it("should return false from parsable String", () => {
            const sj = new SafeJSON(String("false"));
            assert.deepEqual(sj.booleanValue(), false);
        });
        it("should return true from number", () => {
            const sj = new SafeJSON(123.45);
            assert.deepEqual(sj.booleanValue(), true);
        });
        it("shoule return true from Number", () => {
            const sj = new SafeJSON(Number(123.45));
            assert.deepEqual(sj.booleanValue(), true);
        });
        it("should return false from number", () => {
            const sj = new SafeJSON(0);
            assert.deepEqual(sj.booleanValue(), false);
        });
        it("shoule return false from Number", () => {
            const sj = new SafeJSON(Number(0));
            assert.deepEqual(sj.booleanValue(), false);
        });
        it("should return true from boolean", () => {
            const sj = new SafeJSON(true);
            assert.deepEqual(sj.booleanValue(), true);
        });
        it("should return true from Boolean", () => {
            const sj = new SafeJSON(Boolean(true));
            assert.deepEqual(sj.booleanValue(), true);
        });
        it("should return false from dictionary", () => {
            const sj = new SafeJSON({hello: "world"});
            assert.deepEqual(sj.booleanValue(), false);
        });
        it("should return false from array", () => {
            const sj = new SafeJSON(["hello", "world"]);
            assert.deepEqual(sj.booleanValue(), false);
        });
        it("should return false from null", () => {
            const sj = new SafeJSON(null);
            assert.deepEqual(sj.booleanValue(), false);
        });
        it("should return false from undefined", () => {
            const sj = new SafeJSON(undefined);
            assert.deepEqual(sj.booleanValue(), false);
        });
        it("should return false from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeJSON(func);
            assert.deepEqual(sj.booleanValue(), false);
        });
    });
});
