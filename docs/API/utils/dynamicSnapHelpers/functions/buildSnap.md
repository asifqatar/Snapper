***

# Function: buildSnap()

> **buildSnap**(`projectFolderPath`): `Promise`\<`void`\>

Prepares the Snap by setting up dependencies and building it.

This function runs the `npx mm-snap build` command in the given project
folder path to build the Snap.

## Parameters

• **projectFolderPath**: `string`

The directory of the Snap.

## Returns

`Promise`\<`void`\>

## Defined in

[utils/dynamicSnapHelpers.ts:120](https://github.com/asifqatar/Snapper/blob/f34895dbdc410d2977f496cbdd4025a30b31841f/utils/dynamicSnapHelpers.ts#L120)
