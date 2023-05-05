// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { SemVerRange } from "./range.ts";
import { SemVer } from "./semver.ts";
import { outside } from "./outside.ts";

/** Greater than range comparison */
export function ltr(
  version: SemVer,
  range: SemVerRange,
): boolean;
/**
 * @deprecated (will be removed after 0.189.0) Use `ltr(version: SemVer, range: SemVerRange)` instead.
 *
 * Greater than range comparison */
export function ltr(
  version: string | SemVer,
  range: string | SemVerRange,
  options?: { includePrerelease: boolean },
): boolean;
export function ltr(
  version: string | SemVer,
  range: string | SemVerRange,
  options?: { includePrerelease: boolean },
): boolean {
  return outside(version, range, "<", options);
}
