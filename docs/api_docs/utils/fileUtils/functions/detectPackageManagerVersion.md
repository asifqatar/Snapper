---
layout: default
title: "detectPackageManagerVersion"
parent: "functions"

---
[**Snapper Project**](../../../README.md) • **Docs**

***

[Snapper Project](../../../README.md) / [utils/fileUtils](../README.md) / detectPackageManagerVersion

# Function: detectPackageManagerVersion()

> **detectPackageManagerVersion**(`workingDir`): `string`

Detects the package manager version specified in package.json.
It checks for supported package managers: Yarn, npm, and pnpm.

## Parameters

• **workingDir**: `string`

The directory where package.json is located.

## Returns

`string`

- The package manager version string (e.g., "yarn@3.2.1" or "npm@8.0.0").

## Throws

Will throw an error if the package manager format is invalid or unsupported.

## Defined in

[utils/fileUtils.ts:91](https://github.com/asifqatar/Snapper/blob/cfd7a260bee159bf16963ac0f765d267e9b98d84/utils/fileUtils.ts#L91)
