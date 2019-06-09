import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";

describe("SafeJSON", () => {
    describe("numberOrNull()", () => {
        it("should return null from string", () => {
            const sj = new SafeJSON("hello, world");
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return null from String", () => {
            const sj = new SafeJSON(String("hello, world"));
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return 311.34 from parsable string", () => {
            const sj = new SafeJSON("311.34");
            assert.deepEqual(sj.numberOrNull(), 311.34);
        });
        it("should return 23.4 from parsable String", () => {
            const sj = new SafeJSON(String("23.4"));
            assert.deepEqual(sj.numberOrNull(), 23.4);
        });
        it("should return 123.45 from number", () => {
            const sj = new SafeJSON(123.45);
            assert.deepEqual(sj.numberOrNull(), 123.45);
        });
        it("shoule return 123.45 from Number", () => {
            const sj = new SafeJSON(Number(123.45));
            assert.deepEqual(sj.numberOrNull(), 123.45);
        });
        it("should return 1 from boolean", () => {
            const sj = new SafeJSON(true);
            assert.deepEqual(sj.numberOrNull(), 1);
        });
        it("should return 0 from Boolean", () => {
            const sj = new SafeJSON(Boolean(false));
            assert.deepEqual(sj.numberOrNull(), 0);
        });
        it("should return null from dictionary", () => {
            const sj = new SafeJSON({hello: "world"});
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return null from array", () => {
            const sj = new SafeJSON(["hello", "world"]);
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return null from null", () => {
            const sj = new SafeJSON(null);
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return null from undefined", () => {
            const sj = new SafeJSON(undefined);
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return null from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeJSON(func);
            assert.deepEqual(sj.numberOrNull(), null);
        });
    });
});
