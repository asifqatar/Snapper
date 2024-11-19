***

# Function: detectPackageManagerVersion()

> **detectPackageManagerVersion**(`workingDir`): `string`

Detects the package manager version specified in package.json.

This function reads the `package.json` file in the given working directory
and extracts the `packageManager` field. It supports the following package
managers: Yarn, npm, and pnpm.

## Parameters

• **workingDir**: `string`

The directory where package.json is located.

## Returns

`string`

- The package manager version string (e.g., "yarn@3.2.1" or "npm@8.0.0").

## Throws

Will throw an error if the package manager format is invalid or unsupported.

## Defined in

[utils/fileUtils.ts:116](https://github.com/asifqatar/Snapper/blob/f34895dbdc410d2977f496cbdd4025a30b31841f/utils/fileUtils.ts#L116)
