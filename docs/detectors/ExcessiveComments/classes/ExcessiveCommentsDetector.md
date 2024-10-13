[**Snapper Project**](../../../README.md) • **Docs**

***

[Snapper Project](../../../README.md) / [detectors/ExcessiveComments](../README.md) / ExcessiveCommentsDetector

# Class: ExcessiveCommentsDetector

## Extends

- [`DetectorBase`](../../DetectorBase/classes/DetectorBase.md)

## Constructors

### new ExcessiveCommentsDetector()

> **new ExcessiveCommentsDetector**(): [`ExcessiveCommentsDetector`](ExcessiveCommentsDetector.md)

#### Returns

[`ExcessiveCommentsDetector`](ExcessiveCommentsDetector.md)

#### Overrides

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`constructor`](../../DetectorBase/classes/DetectorBase.md#constructors)

#### Defined in

[detectors/ExcessiveComments.ts:11](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/ExcessiveComments.ts#L11)

## Properties

### findings

> `protected` **findings**: [`Finding`](../../../types/type-aliases/Finding.md)[] = `[]`

#### Inherited from

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`findings`](../../DetectorBase/classes/DetectorBase.md#findings)

#### Defined in

[detectors/DetectorBase.ts:11](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/DetectorBase.ts#L11)

***

### name

> `protected` **name**: `string`

#### Inherited from

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`name`](../../DetectorBase/classes/DetectorBase.md#name)

#### Defined in

[detectors/DetectorBase.ts:9](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/DetectorBase.ts#L9)

***

### riskRating

> `protected` **riskRating**: [`RiskRating`](../../../structures/enumerations/RiskRating.md)

#### Inherited from

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`riskRating`](../../DetectorBase/classes/DetectorBase.md#riskrating)

#### Defined in

[detectors/DetectorBase.ts:10](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/DetectorBase.ts#L10)

## Methods

### addFinding()

> **addFinding**(`description`, `filePath`, `lineNum`): `void`

Adds a finding to the findings array.

#### Parameters

• **description**: `string`

Description of the finding.

• **filePath**: `string`

Path of the file where the finding was detected.

• **lineNum**: `number` = `1`

Line number where the finding was detected (default is 1).

#### Returns

`void`

#### Inherited from

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`addFinding`](../../DetectorBase/classes/DetectorBase.md#addfinding)

#### Defined in

[detectors/DetectorBase.ts:27](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/DetectorBase.ts#L27)

***

### clearFindings()

> **clearFindings**(): `void`

Clears the findings.

#### Returns

`void`

#### Inherited from

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`clearFindings`](../../DetectorBase/classes/DetectorBase.md#clearfindings)

#### Defined in

[detectors/DetectorBase.ts:44](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/DetectorBase.ts#L44)

***

### getFindings()

> **getFindings**(): [`Finding`](../../../types/type-aliases/Finding.md)[]

#### Returns

[`Finding`](../../../types/type-aliases/Finding.md)[]

#### Inherited from

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`getFindings`](../../DetectorBase/classes/DetectorBase.md#getfindings)

#### Defined in

[detectors/DetectorBase.ts:52](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/DetectorBase.ts#L52)

***

### getName()

> **getName**(): `string`

#### Returns

`string`

#### Inherited from

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`getName`](../../DetectorBase/classes/DetectorBase.md#getname)

#### Defined in

[detectors/DetectorBase.ts:48](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/DetectorBase.ts#L48)

***

### logDebug()

> **logDebug**(`message`): `void`

Logs a debug message.

#### Parameters

• **message**: `string`

The message to log.

#### Returns

`void`

#### Inherited from

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`logDebug`](../../DetectorBase/classes/DetectorBase.md#logdebug)

#### Defined in

[detectors/DetectorBase.ts:68](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/DetectorBase.ts#L68)

***

### logError()

> **logError**(`message`, `error`?): `void`

Logs an error message.

#### Parameters

• **message**: `string`

The message to log.

• **error?**: `Error`

Optional error object to log.

#### Returns

`void`

#### Inherited from

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`logError`](../../DetectorBase/classes/DetectorBase.md#logerror)

#### Defined in

[detectors/DetectorBase.ts:77](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/DetectorBase.ts#L77)

***

### logInfo()

> **logInfo**(`message`): `void`

Logs an informational message.

#### Parameters

• **message**: `string`

The message to log.

#### Returns

`void`

#### Inherited from

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`logInfo`](../../DetectorBase/classes/DetectorBase.md#loginfo)

#### Defined in

[detectors/DetectorBase.ts:60](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/DetectorBase.ts#L60)

***

### run()

> **run**(`sourceFile`): [`Finding`](../../../types/type-aliases/Finding.md)[]

#### Parameters

• **sourceFile**: `SourceFile`

#### Returns

[`Finding`](../../../types/type-aliases/Finding.md)[]

#### Overrides

[`DetectorBase`](../../DetectorBase/classes/DetectorBase.md).[`run`](../../DetectorBase/classes/DetectorBase.md#run)

#### Defined in

[detectors/ExcessiveComments.ts:15](https://github.com/sayfer-io/Snapper/blob/a444e49088c95ab4a94b5ec3502c29e0d5191e98/detectors/ExcessiveComments.ts#L15)