[**Snapper Project**](../../../README.md) • **Docs**

***

[Snapper Project](../../../README.md) / [utils/fileUtils](../README.md) / detectPackageManager

# Function: detectPackageManager()

> **detectPackageManager**(`workingDir`): `string`

Detects the package manager used in the project.
It checks for Yarn, npm, and pnpm based on the package.json and lock files.

## Parameters

• **workingDir**: `string`

The directory where package.json is located.

## Returns

`string`

- The detected package manager ("yarn", "npm", or "pnpm").

## Throws

Will throw an error if no package.json is found in the working directory.

## Defined in

[utils/fileUtils.ts:113](https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/utils/fileUtils.ts#L113)