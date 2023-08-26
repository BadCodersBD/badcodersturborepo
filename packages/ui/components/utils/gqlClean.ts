export function gqlClean<T extends NonNullable<unknown>>(value: T | null | undefined): T | undefined
export function gqlClean<T extends NonNullable<unknown>>(value: T | null | undefined, fallback: T): T

export function gqlClean<T>(value: T, fallback?: T) {
  return value ?? fallback
}
