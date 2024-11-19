***

# Function: killAllChildProcesses()

> **killAllChildProcesses**(): `void`

Kills all running child processes.

This function terminates all child processes that were spawned using the
`runCommandDetached` function. It iterates through the list of child
processes and attempts to kill each one, including the entire process group.
If any errors occur during the termination process, they are logged.

## Returns

`void`

## Defined in

[utils/commandUtils.ts:100](https://github.com/asifqatar/Snapper/blob/ae06de0570b7844bea238585c0b60d7a09e4149d/utils/commandUtils.ts#L100)
