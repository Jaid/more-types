export type ExcludeKnownTypes<InputGeneric> = Exclude<InputGeneric, Array<RegExp | string> | RegExp | string | void | null | undefined>
