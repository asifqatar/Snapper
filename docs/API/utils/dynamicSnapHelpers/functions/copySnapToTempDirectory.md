***

# Function: copySnapToTempDirectory()

> **copySnapToTempDirectory**(`directory`): `string`

Copies the Snap directory to a temporary directory.

This function creates a new temporary directory using the `createTempDir`
function, and then recursively copies the contents of the given Snap
directory to the temporary directory.

## Parameters

• **directory**: `string`

The Snap directory to copy.

## Returns

`string`

The path to the temporary directory.

## Defined in

[utils/dynamicSnapHelpers.ts:47](https://github.com/asifqatar/Snapper/blob/ae06de0570b7844bea238585c0b60d7a09e4149d/utils/dynamicSnapHelpers.ts#L47)
