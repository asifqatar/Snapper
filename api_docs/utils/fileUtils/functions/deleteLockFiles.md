---
layout: default
title: "deleteLockFiles"
parent: "functions"

---
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

[utils/fileUtils.ts:148](https://github.com/asifqatar/Snapper/blob/ab4f57c6fb0f3a6e7a52b57c79197c1a1edc140e/utils/fileUtils.ts#L148)
