***

# Function: connectSnapServer()

> **connectSnapServer**(`port`): `Promise`\<`any`\>

Connects to the Snap server.

This function connects to the Snap server running at the specified port and
returns the `request`, `onHomePage`, and `onTransaction` functions from the
`installSnap` function.

## Parameters

• **port**: `number`

The port number of the Snap server.

## Returns

`Promise`\<`any`\>

An object containing the Snap server functions.

## Defined in

[utils/dynamicSnapHelpers.ts:134](https://github.com/asifqatar/Snapper/blob/f34895dbdc410d2977f496cbdd4025a30b31841f/utils/dynamicSnapHelpers.ts#L134)
