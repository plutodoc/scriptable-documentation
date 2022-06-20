# args

Arguments passed to the script.

Arguments are passed to the script when the script is executed from a share sheet. You can specify the types of arguments a script supports from the script settings.

## length

Number of arguments supplied by a share sheet.

_Read-only._

Deprecated in version 1.3. Instead of relying on this property, take the length of the array containing the data type you are interested in.

The number of arguments passed to the script from the share seeht.

```
length: number
```

## all

All arguments supplied by a share sheet.

_Read-only._

Deprecated in version 1.3. Instead of relying on this property, access the array containing the data type you are interested in.

All arguments supplied by the share sheet.

```
all: [any]
```

## plainTexts

Plain texts supplied by a share sheet or a shortcut action.

_Read-only._

All plain texts passed to the script from a share sheet or a shortcut action.

If you have enabled "Text" as a share sheet input from the script settings, the script can be run from any share sheet throughout the system that shares plain text.

```
plainTexts: [string]
```

## urls

URLs supplied by a share sheet or a shortcut action.

_Read-only._

All URLs passed to the script from a share sheet or a shortcut action.

If you have enabled "URLs" as a share sheet input from the script settings, the script can be run from any share sheet throughout the system that shares URLs.

```
urls: [string]
```

## fileURLs

File URLs supplied by a share sheet or a shortcut action.

_Read-only._

All file URLs passed to the script from a share sheet or a shortcut action.

If you have enabled "File URLs" as a share sheet input from the script settings, the script can be run from any share sheet throughout the system that shares URLs pointing to a file.

When large files are passed from a share sheet or a shortcut action, the system may terminate the process due to memory constraints. In that case, you should enable "Run in App" in the script settings or in the shortcut.

```
fileURLs: [string]
```

## images

Images supplied by a share sheet or a shortcut action.

_Read-only._

All images passed to the script from a share sheet or a shortcut action.

If you have enabled "Images" as a share sheet input from the script settings, the script can be run from any share sheet throughout the system that shares images.

When large images are passed from a share sheet or a shortcut action, the system may terminate the process due to memory constraints. In that case, you should enable "Run in App" in the script settings or in the shortcut.

```
images: [Image]
```

## queryParameters

Query parameters from a URL scheme.

_Read-only._

Query parameters are supplied to a script when running it from a URL scheme. See the documentation on Scriptables URL schems for more information.

```
queryParameters: {string: string}
```

## siriShortcutArguments

Arguments passed from a Siri Shortcut.

_Read-only._

Deprecated in version 1.4. Instead of using args.shortcutArguments, pass an input parameter to the shortcut action using the Shortcuts app and read the parameter using `args.shortcutParameter`.

When creating a Siri Shortcut in Scriptable, you can define arguments that are passed to the script when the shortcut is run. This lets you differentiate the behavior of a script based on some predefiend arguments.

For example, a script that checks the wather may expect an argument with the key "city". When creating a Siri Shortcut for the script, the argument should be passed with the value containing the name of the city to check the weather for.

```
siriShortcutArguments: {string: string}
```

## shortcutParameter

Parameter passed to a Shortcut.

_Read-only._

When creating a shortcut using the Shortcuts app, you can pass an input parameter that can be read in your script using `args.shortcutParameter`.

This parameter can be any text, list, dictionary or file and will be exposed in your script using the appropriate type. When passing a file, the "Run Script" action will attempt to read the file as JSON or a plain text. If the file cannot be read as JSON or a plain text, a path to the file will be passed as the input parameter.

```
shortcutParameter: any
```

# widgetParameter

Parameter passed to a widget.

_Read-only._

When creating a widget on the Home screen, you can define a parameter that can be read in your script using `args.widgetParameter`.

The parameter can be used to differentiate the behavior of multiple widgets.

```
widgetParameter: any
```

## notification

Notification being handled by the script.

_Read-only._

The notification that a script is being run in or the application was opened from.

The notification contains all information that was set when the notification was originally scheduled, including the `userInfo` property which can be used to contain custom data that might be relevant when running the script.

```
notification: Notification
```
