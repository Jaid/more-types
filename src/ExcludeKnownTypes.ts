export type ExcludeKnownTypes<InputGeneric, MoreExcludes = undefined> = Exclude<InputGeneric, bigint | boolean | MoreExcludes | number | RegExp | string | void | null | undefined>
