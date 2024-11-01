[**Snapper Project**](../../../README.md) • **Docs**

***

[Snapper Project](../../../README.md) / [utils/fileUtils](../README.md) / deleteLockFiles

# Function: deleteLockFiles()

> **deleteLockFiles**(`mainDir`): `string`[]

Deletes all package manager lock files (yarn.lock, pnpm-lock.yaml, package-lock.json)
from the given directory.

## Parameters

• **mainDir**: `string`

The main directory where lock files will be deleted.

## Returns

`string`[]

- An array of the names of the deleted lock files.

## Defined in

[utils/fileUtils.ts:148](https://github.com/asifqatar/Snapper/blob/e04d576ab1b7734793c658f8cf8fae7baadd17bc/utils/fileUtils.ts#L148)
