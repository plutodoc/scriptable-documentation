# console

Adds messages to the log.

The console can be used to log information when running your script. The log may be useful when debugging your script, e.g. to examine values of variables.

## +log

Logs a message to the console.

```
static log(message: any)
```

The message will have a default appearance. Refer to `console.error(message)` to log errors.

You can also use the global function `log(message)` which is a shorthand for `console.log`.

### Parameters

**message**

_any_

Message to log to the console.

## +warn

Logs a warning message to the console.

```
static warn(message: any)
```

The message will have a distinctive appearance. Refer to `console.log(message)` to log informative messages and `console.error(message)` to log errors.

You can also use the global function `logWarning(message)` which is a shorthand for `console.warn`.

### Parameters

**message**

_any_

Message to log to the console.

## +error

Logs an error message to the console.

```
static error(message: any)
```

The message will have a distinctive appearance. Refer to `console.log(message)` to log informative message and `console.warn(message)` to log warnings.

You can also use the global function `logError(message)` which is a shorthand for `console.error`.

### Parameters

**message**

_any_

Message to log to the console.

## +logError

Logs an error message to the console.

Deprecated in version 1.3. Use console.error(message) instead.

```
static logError(message: any)
```

The message will have a distinctive appearance. Refer to `console.log(message)` to log informative message and `console.warn(message)` to log warnings.

You can also use the global function `logError(message)` which is a shorthand for `console.error`.

### Parameters

**message**

_any_

Message to log to the console.
