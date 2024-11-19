***

# Function: detectPackageManager()

> **detectPackageManager**(`workingDir`): `string`

Detects the package manager used in the project.

This function detects the package manager used in the project by checking the
`package.json` file and the presence of lock files (yarn.lock, pnpm-lock.yaml,
package-lock.json). It supports Yarn, npm, and pnpm.

## Parameters

• **workingDir**: `string`

The directory where package.json is located.

## Returns

`string`

- The detected package manager ("yarn", "npm", or "pnpm").

## Throws

Will throw an error if no package.json is found in the working directory.

## Defined in

[utils/fileUtils.ts:142](https://github.com/asifqatar/Snapper/blob/f34895dbdc410d2977f496cbdd4025a30b31841f/utils/fileUtils.ts#L142)
