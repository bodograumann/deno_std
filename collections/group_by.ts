// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

/**
 * Applies the given selector to each element in the given array, returning a
 * Record containing the results as keys and all values that produced that key
 * as values.
 *
 * @example
 * ```ts
 * import { groupBy } from "https://deno.land/std@$STD_VERSION/collections/group_by.ts";
 * import { assertEquals } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * const people = [
 *   { name: "Anna" },
 *   { name: "Arnold" },
 *   { name: "Kim" },
 * ];
 * const peopleByFirstLetter = groupBy(people, (it) => it.name.charAt(0));
 *
 * assertEquals(
 *   peopleByFirstLetter,
 *   {
 *     "A": [{ name: "Anna" }, { name: "Arnold" }],
 *     "K": [{ name: "Kim" }],
 *   },
 * );
 * ```
 */
export function groupBy<T, K extends string>(
  iterable: Iterable<T>,
  selector: (element: T, index: number) => K,
): Partial<Record<K, T[]>> {
  const ret: Partial<Record<K, T[]>> = {};
  let i = 0;

  for (const element of iterable) {
    const key = selector(element, i++);
    const arr: T[] = ret[key] ??= [];
    arr.push(element);
  }

  return ret;
}
