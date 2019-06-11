import assert from "assert";
import { SafeAny } from "../lib/SafeAny";
import { Type } from "../lib/Type";

describe("SafeAny", () => {
    describe("constructor", () => {
        it("should return null-wrapping instance", () => {
            const sj = SafeAny.parseJSON("invalid json");
            assert.deepEqual(sj.type, Type.null);
        });
    });
});
