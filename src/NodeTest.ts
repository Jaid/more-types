import type {describe, it} from 'node:test'
import type {FirstParameter} from 'src/FirstParameter.js'

export type TestFunction = NonNullable<FirstParameter<typeof it>>
export type TestContext = FirstParameter<TestFunction>
export type SuiteFunction = NonNullable<FirstParameter<typeof describe>>
export type SuiteContext = FirstParameter<SuiteFunction>
