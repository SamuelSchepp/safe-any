import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";

describe("SafeJSON", () => {
    describe("arrayOrNull()", () => {
        it("should return null from string", () => {
            const sj = new SafeJSON("hello, world");
            assert.deepEqual(sj.arrayOrNull(), null);
        });
        it("should return null from String", () => {
            const sj = new SafeJSON(String("hello, world"));
            assert.deepEqual(sj.arrayOrNull(), null);
        });
        it("should return null from number", () => {
            const sj = new SafeJSON(123.45);
            assert.deepEqual(sj.arrayOrNull(), null);
        });
        it("shoule return null from Number", () => {
            const sj = new SafeJSON(Number(123.45));
            assert.deepEqual(sj.arrayOrNull(), null);
        });
        it("should return null from boolean", () => {
            const sj = new SafeJSON(true);
            assert.deepEqual(sj.arrayOrNull(), null);
        });
        it("should return null from Boolean", () => {
            const sj = new SafeJSON(Boolean(true));
            assert.deepEqual(sj.arrayOrNull(), null);
        });
        it("should return null from dictionary", () => {
            const sj = new SafeJSON({ hello: "world" });
            assert.deepEqual(sj.arrayOrNull(), null);
        });
        it("should return [\"hello\", \"world\"] from array", () => {
            const sj = new SafeJSON(["hello", "world"]);
            const a = sj.arrayOrNull();
            if (a === null) {
                assert.fail();
            } else {
                assert.deepEqual(a[0].stringOrNull(), "hello");
                assert.deepEqual(a[1].stringOrNull(), "world");
            }
        });
        it("should return null from null", () => {
            const sj = new SafeJSON(null);
            assert.deepEqual(sj.arrayOrNull(), null);
        });
        it("should return null from undefined", () => {
            const sj = new SafeJSON(undefined);
            assert.deepEqual(sj.arrayOrNull(), null);
        });
        it("should return null from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeJSON(func);
            assert.deepEqual(sj.arrayOrNull(), null);
        });
    });
});
