# Alert

Presents an alert.

Use this to configure an alert presented modally or as a sheet. After configuring the alert, call presentAlert() or presentSheet() to present the alert. The two presentations methods will return a value which carries the index of the action that was selected when fulfilled.

## title

Title displayed in the alert. Usually a short string.

```
title: string
```

## message

Detailed message displayed in the alert.

```
message: string
```

## -new Alert

Constructs a new alert.

```
new Alert()
```

## -addAction

Adds an action to the alert.

```
addAction(title: string)
```

Adds an action button to the alert. To check if an action was selected, you should use the first parameter provided when the promise returned by presentAlert() and presentSheet() is resolved.

### Parameters

**title**\
_string_\
Title of the action.

## -addDestructiveAction

Adds a destructive action to the alert.

```
addDestructiveAction(title: string)
```

Destructive action titles have a red text color, signaling that the action may modify or delete data.

### Parameters

**title**\
_string_\
Title of the action.

## -addCancelAction

Adds a cancel action to the alert.

```
addCancelAction(title: string)
```

Adds a cancel action to the alert. When a cancel action is selected, the index provided by presentAlert() or presentSheet() will always be -1. Please note that when running on the iPad and presenting using presentSheet(), the action will not be shown in the list of actions. The operation is cancelled by tapping outside the sheet.

An alert can only contain a single cancel action. Attempting to add more cancel actions will remove any previously added cancel actions.

### Parameters

**title**\
_string_\
Title of the action.

## -addTextField

Adds a text field prompting for user input.

```
addTextField(placeholder: string, text: string): TextField
```

Adds a text field to the alert controller prompting for user input. Retrieve the value for the text field using textFieldValue() and supply\\e the index of the text field. Indices for text fields are assigned in the same order as they are added to the alert starting at 0.

Text fields are not supported when using the sheet presentation.

### Parameters

**placeholder**\
_string_\
Optional placeholder that will be displayed when the text field is empty.

**text**\
_string_\
Optional default value for the text field.

### Return value

_TextField_\
Text field added to the alert.

## -addSecureTextField

Adds a secure text field prompting for user input.

```
addSecureTextField(placeholder: string, text: string): TextField
```

Adds a secure text field to the alert controller prompting for user input. Values entered into a secure text field will be hidden behind dots. Retrieve the value for the text field using textFieldValue() and supply the index of the text field. Indices for text fields are assigned in the same order as they are added to the alert starting at 0.

### Parameters

**placeholder**\
_string_\
Optional placeholder that will be displayed when the text field is empty.

**text**\
_string_\
Optional default value for the text field.

### Return value

_TextField_\
Text field added to the alert.

## -textFieldValue

Retrieves value of a text field.

```
textFieldValue(index: number): string
```

Retrieves the value of a text field added using addTextField() or addSecureTextField(). Indices for text fields are assigned in the same order as they are added to the alert starting at 0.

### Parameters

**index**\
_number_\
Index of text field to retrieve for value.

### Return value

_string_\
Value of the text field at the specified index.

## -present

Presents the alert modally.

```
present(): Promise<number>
```

This is a shorthand for presentAlert().

### Return value

_Promise_\
A promise carrying the selected action index when fulfilled.

## -presentAlert

Presents the alert modally.

```
presentAlert(): Promise<number>
```

### Return value

_Promise_\
A promise carrying the selected action index when fulfilled.

## -presentSheet

Presents the alert as a sheet.

```
presentSheet(): Promise<number>
```

### Return value

_Promise_\
A promise carrying the selected action index when fulfilled.
