import { get, split } from 'lodash';

/**
 * Unwraps the object for the passed key with a default value.
 * @param data - The object from which to extract a property.
 * @param key - The path of the property to get.
 * @param defaultValue - The default value to return if the property is undefined.
 * @returns The property value or default value.
 */
export const safeUnwrap = <T, U>(data: T, key: string, defaultValue: U): U | undefined => {
  return get(data, key, defaultValue);
};

/**
 * Safely splits the string based on a separator.
 * @param value - The string to split.
 * @param separator - The separator to split the string.
 * @returns An array of split strings.
 */
export const safeSplit = (value: string, separator: string): string[] => {
  return split(value, separator);
};

/**
 * Checks if the value of a variable is not null and undefined.
 * @param variable - The variable to check.
 * @returns true if the variable is neither undefined nor null, false otherwise.
 */
export function isNotNullAndUndefined(variable: any): boolean {
  return typeof variable !== undefined && variable !== null;
}

/**
 * Checks if the value of a variable is not null, undefined and empty.
 * @param variable - The variable to check.
 * @returns true if the variable is neither undefined nor null, false otherwise.
 */
export function isNotNullAndUndefinedAndEmpty(variable: any): boolean {
  return typeof variable !== undefined && variable !== null && variable !== '';
}

/**
 * Verifies if the given variable is a function.
 * @param verifyFunction - The variable to verify.
 * @returns true if the variable is a function, false otherwise.
 */
export function isFunction(verifyFunction: any): boolean {
  return typeof verifyFunction === 'function';
}
