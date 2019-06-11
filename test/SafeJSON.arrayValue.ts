import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny", () => {
    describe("arrayValue()", () => {
        it("should return [] from string", () => {
            const sj = new SafeAny("hello, world");
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from String", () => {
            const sj = new SafeAny(String("hello, world"));
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from number", () => {
            const sj = new SafeAny(123.45);
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("shoule return [] from Number", () => {
            const sj = new SafeAny(Number(123.45));
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from boolean", () => {
            const sj = new SafeAny(true);
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from Boolean", () => {
            const sj = new SafeAny(Boolean(true));
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from dictionary", () => {
            const sj = new SafeAny({ hello: "world" });
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [\"hello\", \"world\"] from array", () => {
            const sj = new SafeAny(["hello", "world"]);
            const a = sj.arrayValue();
            assert.deepEqual(a[0].stringOrNull(), "hello");
            assert.deepEqual(a[1].stringOrNull(), "world");
        });
        it("should return [] from null", () => {
            const sj = new SafeAny(null);
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from undefined", () => {
            const sj = new SafeAny(undefined);
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeAny(func);
            assert.deepEqual(sj.arrayValue(), []);
        });
    });
});
