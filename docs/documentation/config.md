# config

Configuration the script runs with.

Contains information about the configuration the script is currently being run under.

## runsInApp

_Read-only._

Whether the script is running in the app.

```
runsInApp: bool
```

## runsInActionExtension

_Read-only._

Whether the script is running in the action extension.

```
runsInActionExtension: bool
```

## runsWithSiri

_Read-only._

Whether the script is running with Siri.

```
runsWithSiri: bool
```

## runsInWidget

_Read-only._

Whether the script is running in a widget.

```
runsInWidget: bool
```

## runsInNotification

_Read-only._

Whether the script is running in a notification.

```
runsInNotification: bool
```

## runsFromHomeScreen

_Read-only._

Whether the script was run from the home screen. You can add a script to the home screen from the script settings.

```
runsFromHomeScreen: bool
```

## widgetFamily

_Read-only._

The size of the widget the script is running in.

Possible values are: `small`, `medium`, `large` `extraLarge` and `null`. The value is `null` when the script is not running in a widget.

```
widgetFamily: string
```
