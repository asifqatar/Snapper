[**Snapper Project**](../../../README.md) • **Docs**

***

[Snapper Project](../../../README.md) / [utils/dynamicSnapHelpers](../README.md) / startAndConnectToSnap

# Function: startAndConnectToSnap()

> **startAndConnectToSnap**(`directory`): `Promise`\<`any`\>

Starts the Snap server and connects to it.

This function first starts the Snap server in the background using the
`startSnapServer` function, then waits for a few seconds before attempting
to connect to the Snap server using the `connectSnapServer` function. It
returns an object containing the Snap server functions and the port number.

## Parameters

• **directory**: `string`

The directory where the Snap server should be started.

## Returns

`Promise`\<`any`\>

The Snap instance if connected successfully.

## Defined in

[utils/dynamicSnapHelpers.ts:154](https://github.com/asifqatar/Snapper/blob/cbd1e990f7eda7e735082611ff93e8f046c82e35/utils/dynamicSnapHelpers.ts#L154)