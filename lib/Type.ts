/**
 * An enum that represents the various types of a JSON object.
 * Undefined and null are treated equally.
 */
export enum Type {
  string = "string",
  number = "number",
  boolean = "boolean",
  dictionary = "dictionary",
  array = "array",
  null = "null",
}
