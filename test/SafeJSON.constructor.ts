import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";
import { Type } from "../lib/Type";

describe("SafeJSON", () => {
    describe("constructor", () => {
        it("should return null-wrapping instance", () => {
            const sj = SafeJSON.parseJSON("invalid json");
            assert.deepEqual(sj.type, Type.null);
        });
    });
});
