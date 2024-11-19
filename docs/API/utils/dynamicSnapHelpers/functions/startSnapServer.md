***

# Function: startSnapServer()

> **startSnapServer**(`snapDirectory`, `port`): `void`

Starts the Snap server in the background.

This function uses the `runCommandDetached` utility to start the Snap server
in the background. The Snap server is started using the `npx mm-snap serve`
command, with the specified port number and `--verboseErrors` flag.

## Parameters

• **snapDirectory**: `string`

The directory where the Snap server should be started.

• **port**: `number`

The port number to use for the Snap server.

## Returns

`void`

## Defined in

[utils/dynamicSnapHelpers.ts:63](https://github.com/asifqatar/Snapper/blob/ae06de0570b7844bea238585c0b60d7a09e4149d/utils/dynamicSnapHelpers.ts#L63)
