export type FirstParameter<FuctionGeneric> = FuctionGeneric extends (first: infer First, ...args: Array<any>) => any ? First : never
