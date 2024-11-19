***

# Function: createTempDir()

> **createTempDir**(): `string`

Creates a temporary directory for the package audit.
Automatically cleans up the directory when done.

This function creates a temporary directory using the `tmp` library.
The `unsafeCleanup` option is set to `true` to ensure that the directory
and its contents are automatically removed when the process exits.

## Returns

`string`

- The path to the created temporary directory.

## Defined in

[utils/fileUtils.ts:18](https://github.com/asifqatar/Snapper/blob/f34895dbdc410d2977f496cbdd4025a30b31841f/utils/fileUtils.ts#L18)
