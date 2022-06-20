# CallbackURL

Open x-callback-url requests.

Opens apps that support x-callback-url and waits for a response from the target application. You can find a list of apps that support x-callback-url at [x-callback-url.com/apps](http://x-callback-url.com/apps/).

## -new CallbackURL

Construct CallbackURL.

```
new CallbackURL(baseURL: string)
```

Constructs an object that opens x-callback-url requests and waits for a response from the target app.

### Parameters

**baseURL**

_string_

Base URL of the request. This is usally something like my-app://x-callback-url/action

## -addParameter

Construct CallbackURL.

```
addParameter(name: string, value: string)
```

Appends a key/value pair to the base URL as a query parameter. The name and value are automatically encoded. Do not add the x-callback-url paramters, i.e. x-source, x-success, x-error and x-cancel as Scriptable will add those.

### Parameters

**name**

_string_

Name of the query parameter to add.

**value**

_string_

Value of the query parameter to add.

## -open

Opens the callback URL.

```
open(): Promise<{string: string}>
```

Opens the target app and waits for the target app to perform the action. The returned promise contains the query parameters supplied by the target app when it invokes the callback. If the action failed in the target app or the action was cancelled, the promise will be rejected. The promise is also rejected if the action times out because the target app did not invoke the callback.

### Return value

_Promise<{string: string}>_

Promise that provides the query parameters supplied by the target app when it invokes the callback.

## -getURL

Creates the callback URL.

```
getURL(): string
```

Creates a callback URL with the specified base URL and query parameters.

### Return value

_string_

Configured callback URL.
