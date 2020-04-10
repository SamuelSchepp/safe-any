import assert from "assert";
import { SafeAny } from "../lib/SafeAny";
import { Type } from "../lib/Type";

describe("SafeAny.constructor", () => {
    it("should return null-wrapping instance", () => {
        const sj = SafeAny.parseJSON("invalid json");
        assert.deepStrictEqual(sj.type, Type.null);
    });
});
