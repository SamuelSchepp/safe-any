/**
 * Helper class for SafeAny implementation
 */
import { Dictionary } from "./Dictionary";

export class Tool {

  /**
   * Returns true, if the given value is a native string.
   * @param {unknown} value The value to check.
   * @returns {boolean} The result.
   */
  public static isString(value: unknown): value is string {
    return typeof value === "string" || value instanceof String;
  }

  /**
   * Returns true, if the given value is a native number.
   * @param {unknown} value The value to check.
   * @returns {boolean} The result.
   */
  public static isNumber(value: unknown): value is number {
    return typeof value === "number" && isFinite(value);
  }

  /**
   * Returns true, if the given value is a native boolean.
   * @param {unknown} value The value to check.
   * @returns {boolean} The result.
   */
  public static isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
  }

  /**
   * Returns true, if the given value is a native array.
   * @param {unknown} value The value to check.
   * @returns {boolean} The result.
   */
  public static isArray(value: unknown): value is unknown[] {
    if (value != null && typeof value === "object" && (value as Record<string, unknown>).constructor === Array) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Returns true, if the given value is a native dictionary.
   * @param {unknown} value The value to check.
   * @returns {boolean} The result.
   */
  public static isDictionary(value: unknown): value is Dictionary<unknown> {
    if (value != null && typeof value === "object" && (value as Record<string, unknown>).constructor !== Array) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Maps every value of a dictionary.
   *
   * @param {Dictionary<A>} dict The dictionary whose values to map.
   * @param {Function} map The function that will be applied to every value of the dictionary.
   * @returns {Dictionary<B>} The new dictionary.
   */
  public static mapValue<A, B>(dict: Dictionary<A>, map: (value: A) => B): Dictionary<B> {
    const akku: Dictionary<B> = {};

    Object.keys(dict).forEach((key: string) => {
      akku[key] = map(dict[key]);
    });

    return akku;
  }
}
