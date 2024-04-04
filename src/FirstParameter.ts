export type FirstParameter<FuctionGeneric> = FuctionGeneric extends (first: infer First, ...args: Array<any>) => any ? First : never

export type SecondParameter<FuctionGeneric> = FuctionGeneric extends (first: any, second: infer Second, ...args: Array<any>) => any ? Second : never
