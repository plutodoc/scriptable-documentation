# Calendar

Holds reminders and events.

Use the Calendar type to get a specific calendar. The calendar is used with the Reminder and CalendarEvent types when fetching reminders or events from a specific calendar or when inserting into a calendar. If you are fetching reminders or events from all calendars, you do not need to pass the calendars when performing the fetch with the Reminder or CalendarEvent types.

## identifier

Calendar identifier.

_Read-only._

```
identifier: string
```

## title

Title of calendar.

```
title: string
```

## isSubscribed

Whether the calendar is a subscribed calendar.

_Read-only._

```
isSubscribed: bool
```

## allowsContentModifications

Indicates whether items can be added, edited, and deleted in the calendar.

_Read-only._

```
allowsContentModifications: bool
```

---

## color

Color of calendar.

```
color: Color
```

## -supportsAvailability

Checks if the calendar supports availability.

```
supportsAvailability(availability: string): bool
```

The following values are supported:

- busy
- free
- tentative
- unavailable

Not all calendars support all of these availabilities and some calendars may not support availability at all. Use this function to check if the calendar supports a specific availability.

### Parameters

**availability**\
_string_\
Availability to check against.

### Return value

_bool_\
True if the calendar supports the availability, otherwise false.

## -save

Saves calendar.

```
save()
```

Saves changes to the calendar.

## -remove

Removes calendar.

```
remove()
```

The calendar is removed immediately. This cannot be undone.

## +forReminders

Fetches calendars for reminders.

```
static forReminders(): Promise<[Calendar]>
```

A calendar can only hold either reminders or events. Call this function to fetch all calendars that can hold reminders.

### Return value

_Promise<\[Calendar\]>_\
Promise that provides the calendars when fulfilled.

## +forEvents

Fetches calendars for events.

```
static forEvents(): Promise<[Calendar]>
```

A calendar can only hold either reminders or events. Call this function to fetch all calendars that can hold events.

### Return value

_Promise<\[Calendar\]>_\
Promise that provides the calendars when fulfilled.

## +forRemindersByTitle

Fetches a calendar that holds reminders.

```
static forRemindersByTitle(title: string): Promise<Calendar>
```

### Parameters

**title**\
_string_\
Title of calendar.

### Return value

_Promise_\
Promise that provides the calendar when fulfilled.

## +forEventsByTitle

Fetches a calendar that holds events.

```
static forEventsByTitle(title: string): Promise<Calendar>
```

### Parameters

**title**\
_string_\
Title of calendar.

### Return value

_Promise_\
Promise that provides the calendar when fulfilled.

## +createForReminders

Create a new calendar that holds reminders.

```
static createForReminders(title: string): Promise<Calendar>
```

This will create a new list for reminders in the Reminders app. The list is automatically saved so there is no need to call `save()` after creating the list.

### Return value

_Promise_\
Promise that provides the created calendar when fulfilled.

## +findOrCreateForReminders

Find or create a new calendar that holds reminders.

```
static findOrCreateForReminders(title: string): Promise<Calendar>
```

This will attempt to find a calendar for reminders with the specified name. If no calendar is found, a new calendar is created and the calendar will appear as a reminder list in the Reminders app. If multiple calendars are found for the specified name, the first one will be returned. The list is automatically saved so there is no need to call `save()` in the case the list was created.

### Return value

_Promise_\
Promise that provides the calendar when fulfilled.

## +defaultForReminders

Default calendar for reminders.

```
static defaultForReminders(): Promise<Calendar>
```

A calendar can only hold either reminders or events. Call this function to get the default calendar that can hold reminders.

### Return value

_Promise_\
Promise that provides the calendar when fulfilled.

## +defaultForEvents

Default calendar for events.

```
static defaultForEvents(): Promise<Calendar>
```

A calendar can only hold either reminders or events. Call this function to get the default calendar that can hold events.

### Return value

_Promise_\
Promise that provides the calendar when fulfilled.

---

## +presentPicker

Presents a view for picking calendars.

```
static presentPicker(allowMultiple: bool): Promise<[Calendar]>
```

### Parameters

**allowMultiple**\
_bool_\
Whether to allow picking multiple calenders. Defaults to false.

### Return value

_Promise<\[Calendar\]>_\
Promise that provides the calendars when fulfilled.
