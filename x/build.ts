import {generateDtsBundle} from 'dts-bundle-generator'
import * as path from 'forward-slash-path'
import fs from 'fs-extra'
import * as lodash from 'lodash-es'

const outputFolder = path.join(`dist`, `package`, `more-types`, `production`)
await fs.emptyDir(outputFolder)
const makeDts = async () => {
  const generateDtsBundleEntryOptions: Partial<Parameters<typeof generateDtsBundle>[0][0]> = {
    output: {
      sortNodes: true,
      noBanner: true,
      exportReferencedTypes: false,
    },
    libraries: {
      inlinedLibraries: [`type-fest`, `yargs`, `yargs-parser`],
    },
  }
  const dtsEntry: Parameters<typeof generateDtsBundle>[0][0] = {
    ...generateDtsBundleEntryOptions,
    filePath: path.join(`src`, `index.ts`),
  }
  const [dtsText] = generateDtsBundle([dtsEntry])
  await fs.outputFile(path.join(outputFolder, `more-types.d.ts`), dtsText)
}
const makePkg = async () => {
  const pkg = await fs.readJson(`package.json`)
  const pkgSelection = lodash.pick(pkg, [`name`, `version`, `description`, `license`, `keywords`])
  const outputPkg = {
    ...pkgSelection,
    type: `module`,
    exports: {
      ".": {
        types: `./more-types.d.ts`,
        default: `./more-types.d.ts`,
      },
    },
  }
  const outputFile = path.join(outputFolder, `package.json`)
  await fs.outputJson(outputFile, outputPkg)
}
await Promise.all([
  makeDts(),
  makePkg(),
  fs.copy(`readme.md`, path.join(outputFolder, `readme.md`)),
  fs.copy(`license.txt`, path.join(outputFolder, `license.txt`)),
])
