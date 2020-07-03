import { Dictionary } from "./Dictionary";
import { Tool } from "./Tool";
import { Type } from "./Type";

/**
 * A wrapper for `any` with a safe access interface.
 */
export class Any {

  /**
   * The type of the current root object.
   * This can be used to make decision on futher handling.
   */
  public readonly type: Type;

  /**
   * The actual native object, that is wrapped by this class.
   */
  private readonly raw: unknown;

  /**
   * Default constructor to create the safe interface to `any`.
   * @param {unknown} object An object that is the result of a JSON parse or any literal.
   */
  public constructor(object: unknown) {
    this.raw = object;

    if (Tool.isString(object)) {
      this.type = Type.string;
    } else if (Tool.isNumber(object)) {
      this.type = Type.number;
    } else if (Tool.isBoolean(object)) {
      this.type = Type.boolean;
    } else if (Tool.isArray(object)) {
      this.type = Type.array;
    } else if (Tool.isDictionary(object)) {
      this.type = Type.dictionary;
    } else {
      this.type = Type.null;
    }
  }

  /**
   * Parses the json literal using `JSON.parse()`.
   *
   * If the JSON failed to parse, a valid `Any` object is still returned.
   * The `type` property of this object has the value `Type.null`.
   *
   * Only use this, if the parse error can be ignored.
   * This function does not throw.
   *
   * @param {string} json A json string literal that should be parsed.
   * @returns {Any} New instance
   */
  public static parseJSON(json: string): Any {
    try {
      const data = JSON.parse(json) as unknown;
      return new Any(data);
    } catch {
      return new Any(null);
    }
  }

  // OrNull interface

  /**
   * Tries to parse a string value and returns it.
   *
   * A number is converted to a string using `toString()`.
   *
   * A boolean is converted to a string:
   * - `true`: `"true"`
   * - `false`: `"false"`
   *
   * @returns {string | null} A string value or `null` if it cannot be converted.
   */
  public stringOrNull(): string | null {
    switch (this.type) {
    case Type.string: {
      return this.raw as string;
    }
    case Type.number: {
      return (this.raw as number).toString();
    }
    case Type.boolean: {
      if (this.raw as boolean) {
        return "true";
      } else {
        return "false";
      }
    }
    case Type.dictionary: return null;
    case Type.array: return null;
    case Type.null: return null;
    }
  }

  /**
   * Tries to parse a number value and returns it.
   *
   * A string is converted to a number using `Number()` constructor.
   * If the result is `NaN`, `null` will be returned.
   *
   * A boolean is converted to a number:
   * - `true`: `1`
   * - `false`: `0`
   *
   * @returns {number | null} A number value or `null` if it cannot be converted.
   */
  public numberOrNull(): number | null {
    switch (this.type) {
    case Type.string: {
      const n = Number(this.raw);
      if (isNaN(n)) {
        return null;
      } else {
        return n;
      }
    }
    case Type.number: {
      return this.raw as number;
    }
    case Type.boolean: {
      if (this.raw as boolean) {
        return 1;
      } else {
        return 0;
      }
    }
    case Type.dictionary: return null;
    case Type.array: return null;
    case Type.null: return null;
    }
  }

  /**
   * Tries to parse a boolean value and returns it.
   *
   * A string is converted to a boolean:
   * - `"true"`: `true`
   * - `"false"`: `false`
   *
   * A number is converted to a boolean:
   * - `0`: `false`
   * - any other number: `true`
   *
   * @returns {boolean | null} A number value or `null` if it cannot be converted.
   */
  public booleanOrNull(): boolean | null {
    switch (this.type) {
    case Type.string: {
      if (this.raw === "true") {
        return true;
      } else if (this.raw === "false") {
        return false;
      } else {
        return null;
      }
    }
    case Type.number: {
      if (this.raw === 0) {
        return false;
      } else {
        return true;
      }
    }
    case Type.boolean: {
      return this.raw as boolean;
    }
    case Type.dictionary: return null;
    case Type.array: return null;
    case Type.null: return null;
    }
  }

  /**
   * Tries to return the given object as a dictionary.
   *
   * @returns {Dictionary<Any> | null} A dictionary value or `null`.
   */
  public dictionaryOrNull(): Dictionary<Any> | null {
    if (this.type === Type.dictionary) {
      return Tool.mapValue(this.raw as Dictionary<unknown>, (value: unknown) => {
        return new Any(value);
      });
    } else {
      return null;
    }
  }

  /**
   * Tries to return the given object as an array.
   *
   * @returns {Any[] | null} An array value or `null`.
   */
  public arrayOrNull(): Any[] | null {
    if (this.type === Type.array) {
      return (this.raw as unknown[]).map((value: unknown) => {
        return new Any(value);
      });
    } else {
      return null;
    }
  }

  // Value interface

  /**
   * Tries to return the given object as a string.
   * If the conversion failes, `""` is returned.
   *
   * See [[stringOrNull]] for conversion rules.
   *
   * @returns {string} A string value or `""`.
   */
  public stringValue(): string {
    return this.stringOrDefault("");
  }

  /**
   * Tries to return the given object as a number.
   * If the conversion failes, `0` is returned.
   *
   * See [[numberOrNull]] for conversion rules.
   *
   * @returns {number} A number value or `0`.
   */
  public numberValue(): number {
    return this.numberOrDefault(0);
  }

  /**
   * Tries to return the given object as a boolean.
   * If the conversion failes, `false` is returned.
   *
   * See [[booleanOrNull]] for conversion rules.
   *
   * @returns {boolean} A boolean value or `false`.
   */
  public booleanValue(): boolean {
    return this.booleanOrDefault(false);
  }

  /**
   * Tries to return the given object as a native dictionary.
   * If the the object is no dictionary, `{}` is returned.
   *
   * The values are wrapped in `Any`.
   *
   * @returns {Dictionary<Any>} A valid dictionary.
   */
  public dictionaryValue(): Dictionary<Any> {
    const dictionary = this.dictionaryOrNull();
    if (dictionary == null) {
      return {};
    } else {
      return dictionary;
    }
  }

  /**
   * Tries to return the given object as a native array.
   * If the the object is no array, `[]` is returned.
   *
   * The values are wrapped in `Any`.
   *
   * @returns {Any[]} A valid array.
   */
  public arrayValue(): Any[] {
    const array = this.arrayOrNull();
    if (array == null) {
      return [];
    } else {
      return array;
    }
  }

  // OrDefault interface

  /**
   * Tries to convert the object to a string value.
   * If the conversion failed, the default value `value` will be returned.
   *
   * See [[stringOrNull]] for conversion rules.
   *
   * @param {string} value The fallback value that will be returned if conversion failed.
   * @returns {string} The string value.
   */
  public stringOrDefault(value: string): string {
    const s = this.stringOrNull();
    if (s === null) {
      return value;
    } else {
      return s;
    }
  }

  /**
   * Tries to convert the object to a number value.
   * If the conversion failed, the default value `value` will be returned.
   *
   * See [[numberOrNull]] for conversion rules.
   *
   * @param {number} value The fallback value that will be returned if conversion failed.
   * @returns {number} A number value.
   */
  public numberOrDefault(value: number): number {
    const n = this.numberOrNull();
    if (n === null) {
      return value;
    } else {
      return n;
    }
  }

  /**
   * Tries to convert the object to a boolean value.
   * If the conversion failed, the default value `value` will be returned.
   *
   * See [[booleanOrNull]] for conversion rules.
   *
   * @param {boolean} value The fallback value that will be returned if conversion failed.
   * @returns {boolean} A boolean value.
   */
  public booleanOrDefault(value: boolean): boolean {
    const b = this.booleanOrNull();
    if (b === null) {
      return value;
    } else {
      return b;
    }
  }

  // Direct dictionary access

  /**
   * This function will try to return a wrapped child object.
   * Use this function if the object is assumed to be a dictionary or an array.
   * If `key` is a string, the root object is considered to be a dictionary and object at that key is beeing wrapped
   * and returned.
   * If `key` is a number, the root object is considered to be an array and the value at that index is beeing wrapped
   * and returned.
   *
   * `Any(null)` will be returned if the child cannot be accessed, or the type of `key` is not compatible with
   * the subscript signature of the root object.
   *
   * @param {string | number} key The key that should be used to access the child object.
   * @returns {Any} the new instance.
   */
  public get(key: string | number): Any {
    if (Tool.isString(key)) {
      if (this.type === Type.dictionary) {
        return new Any((this.raw as Dictionary<unknown>)[key]);
      } else {
        return new Any(null);
      }
    } else if (Tool.isNumber(key)) {
      if (this.type === Type.array) {
        return new Any((this.raw as unknown[])[key]);
      } else {
        return new Any(null);
      }
    } else {
      return new Any(null);
    }
  }

  // Other

  /**
   * If the object is a string, this operator treats the value as a JSON string and tries to re-parse it into an
   * object and returns it.
   * If the object is no string or the parsing failed, the current object will be returned without change.
   *
   * It replaces the unhandy manual approach of breaking the operator chain.
   * ```typescript
   * // Instead of
   * Any.parsedJSON(safeObject.get("jsonString").stringValue()).get(0)
   * // Do this
   * safeObject.get("jsonString").parsed().get(0)
   * ```
   *
   * @returns {Any} The new instance.
   */
  public parsed(): Any {
    if (this.type === Type.string) {
      try {
        const parsed = JSON.parse(this.raw as string) as unknown;
        return new Any(parsed);
      } catch {
        return this;
      }
    } else {
      return this;
    }
  }

  /**
   * Returns the internal storage object.
   * Use with caution.
   *
   * @returns {unknown} The internal storage object.
   */
  public native(): unknown {
    return this.raw;
  }
}
