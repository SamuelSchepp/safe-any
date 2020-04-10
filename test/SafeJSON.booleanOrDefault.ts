import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny.booleanOrDefault()", () => {
    it("should return true from string", () => {
        const sj = new SafeAny("hello, world");
        assert.deepStrictEqual(sj.booleanOrDefault(true), true);
    });
    it("should return true from String", () => {
        const sj = new SafeAny(String("hello, world"));
        assert.deepStrictEqual(sj.booleanOrDefault(true), true);
    });
    it("should return true from parsable string", () => {
        const sj = new SafeAny("true");
        assert.deepStrictEqual(sj.booleanOrDefault(true), true);
    });
    it("should return false from parsable String", () => {
        const sj = new SafeAny(String("false"));
        assert.deepStrictEqual(sj.booleanOrDefault(true), false);
    });
    it("should return true from number", () => {
        const sj = new SafeAny(123.45);
        assert.deepStrictEqual(sj.booleanOrDefault(true), true);
    });
    it("shoule return true from Number", () => {
        const sj = new SafeAny(Number(123.45));
        assert.deepStrictEqual(sj.booleanOrDefault(true), true);
    });
    it("should return false from number", () => {
        const sj = new SafeAny(0);
        assert.deepStrictEqual(sj.booleanOrDefault(true), false);
    });
    it("shoule return false from Number", () => {
        const sj = new SafeAny(Number(0));
        assert.deepStrictEqual(sj.booleanOrDefault(true), false);
    });
    it("should return false from boolean", () => {
        const sj = new SafeAny(false);
        assert.deepStrictEqual(sj.booleanOrDefault(true), false);
    });
    it("should return false from Boolean", () => {
        const sj = new SafeAny(Boolean(false));
        assert.deepStrictEqual(sj.booleanOrDefault(true), false);
    });
    it("should return true from dictionary", () => {
        const sj = new SafeAny({ hello: "world" });
        assert.deepStrictEqual(sj.booleanOrDefault(true), true);
    });
    it("should return true from array", () => {
        const sj = new SafeAny(["hello", "world"]);
        assert.deepStrictEqual(sj.booleanOrDefault(true), true);
    });
    it("should return true from null", () => {
        const sj = new SafeAny(null);
        assert.deepStrictEqual(sj.booleanOrDefault(true), true);
    });
    it("should return true from undefined", () => {
        const sj = new SafeAny(undefined);
        assert.deepStrictEqual(sj.booleanOrDefault(true), true);
    });
    it("should return true from function", () => {
        const func = () => {
            return 3;
        };
        const sj = new SafeAny(func);
        assert.deepStrictEqual(sj.booleanOrDefault(true), true);
    });
});
