import type {MergeThree} from './MergeThree.js'

export type InputOptionsSetup = {
  defaultsType?: Record<string, unknown>
  optionalOptions?: Record<string, unknown>
  requiredOptions?: Record<string, unknown>
}

export type InputOptions<Setup extends InputOptionsSetup> = {
  defaultsType: Setup[`defaultsType`]
  merged: MergeThree<Setup[`defaultsType`], Partial<Setup[`optionalOptions`]>, Setup[`requiredOptions`]>
  optionalOptions: Partial<Setup[`optionalOptions`]>
  parameter: MergeThree<Partial<Setup[`defaultsType`]>, Partial<Setup[`optionalOptions`]>, Setup[`requiredOptions`]>
  requiredOptions: Setup[`requiredOptions`]
}
