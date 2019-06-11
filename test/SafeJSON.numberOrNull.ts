import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny", () => {
    describe("numberOrNull()", () => {
        it("should return null from string", () => {
            const sj = new SafeAny("hello, world");
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return null from String", () => {
            const sj = new SafeAny(String("hello, world"));
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return 311.34 from parsable string", () => {
            const sj = new SafeAny("311.34");
            assert.deepEqual(sj.numberOrNull(), 311.34);
        });
        it("should return 23.4 from parsable String", () => {
            const sj = new SafeAny(String("23.4"));
            assert.deepEqual(sj.numberOrNull(), 23.4);
        });
        it("should return 123.45 from number", () => {
            const sj = new SafeAny(123.45);
            assert.deepEqual(sj.numberOrNull(), 123.45);
        });
        it("shoule return 123.45 from Number", () => {
            const sj = new SafeAny(Number(123.45));
            assert.deepEqual(sj.numberOrNull(), 123.45);
        });
        it("should return 1 from boolean", () => {
            const sj = new SafeAny(true);
            assert.deepEqual(sj.numberOrNull(), 1);
        });
        it("should return 0 from Boolean", () => {
            const sj = new SafeAny(Boolean(false));
            assert.deepEqual(sj.numberOrNull(), 0);
        });
        it("should return null from dictionary", () => {
            const sj = new SafeAny({hello: "world"});
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return null from array", () => {
            const sj = new SafeAny(["hello", "world"]);
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return null from null", () => {
            const sj = new SafeAny(null);
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return null from undefined", () => {
            const sj = new SafeAny(undefined);
            assert.deepEqual(sj.numberOrNull(), null);
        });
        it("should return null from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeAny(func);
            assert.deepEqual(sj.numberOrNull(), null);
        });
    });
});
