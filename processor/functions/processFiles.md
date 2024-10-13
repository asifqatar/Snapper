[**Snapper Project**](../../README.md) • **Docs**

***

[Snapper Project](../../README.md) / [processor](../README.md) / processFiles

# Function: processFiles()

> **processFiles**(`projectPath`, `detectorName`?, `recursive`?): `Promise`\<[`Finding`](../../types/type-aliases/Finding.md)[]\>

Processes files in a TypeScript project to find issues based on specified detector.

## Parameters

• **projectPath**: `string`

The path to the TypeScript project.

• **detectorName?**: `string`

The specific detector to run. If not provided, all detectors will be applied.

• **recursive?**: `boolean` = `false`

Whether to process projects recursively.

## Returns

`Promise`\<[`Finding`](../../types/type-aliases/Finding.md)[]\>

- A promise that resolves to an array of findings.

## Defined in

[processor.ts:43](https://github.com/asifqatar/Snapper/blob/10d8c215d2a9fa01e8560a55968929911c581044/processor.ts#L43)
