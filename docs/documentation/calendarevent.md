# CalendarEvent

Manages events in calendars.

Used for creating, fetching and removing events from your calendars.

## identifier

Identifier of event.

_Read-only._

```
identifier: string
```

## title

Title of event.

```
title: string
```

## location

Location of event.

```
location: string
```

## notes

Notes associated with event.

```
notes: string
```

## startDate

Start date of event.

```
startDate: Date
```

## endDate

End date of event.

```
endDate: Date
```

## isAllDay

Whether the event is an all-day event.

```
isAllDay: bool
```

## attendees

Attendees associated with the event.

_Read-only._

An array of objects on the following form:

```
{
  "isCurrentUser": false,
  "name": "John Appleseed",
  "status": "accepted",
  "type": "person",
  "role": "required"
}
```

Note that the property is read-only since iOS does not expose API to modify the attendees of an event.

```
attendees: [any]
```

## availability

Availability during the event.

Indicates how the event should be treated for scheduling purposes. The following values are supported:

- busy
- free
- tentative
- unavailable

Be aware that not all calendars support all of these availabilities and some calendars may not support availability at all. Use `Calendar.supportsAvailability()` to check if a calendar supports a specific availability.

```
availability: string
```

## timeZone

Time zone of event.

Geopolitical region identifier that identifies the time zone, e.g. "Europe/Copenhagen", "America/New\_York" and "Asia/Tokyo".

```
timeZone: string
```

## calendar

Calendar the event is stored in.

```
calendar: Calendar
```

## -new CalendarEvent

Constructs an event.

In order to add the event to your calendar, you must call the save() function.

```
new CalendarEvent()
```

## -addRecurrenceRule

Adds a recurrence rule.

```
addRecurrenceRule(recurrenceRule: RecurrenceRule)
```

Recurrence rules specify when the eventer or reminder should be repeated. See the documentation of RecurrenceRule for more information on creating rules.

### Parameters

**recurrenceRule**\
_RecurrenceRule_\
Recurrence rule to add to the reminder.

## -removeAllRecurrenceRules

Removes all recurrence rules.

```
removeAllRecurrenceRules()
```

## -save

Saves event.

```
save()
```

Saves changes to an event, inserting it into the calendar if it is newly created.

## -remove

Removes event from calendar.

```
remove()
```

## -presentEdit

Presents a view for editing the calendar event.

```
presentEdit(): Promise<CalendarEvent>
```

The presented view supports editing various attributes of the event, including title, location, dates, recurrence and alerts.

### Return value

_Promise_\
Promise that provides the updated event when fulfilled.

## +presentCreate

Presents a view for creating a calendar event.

```
static presentCreate(): Promise<CalendarEvent>
```

The presented view supports editing various attributes of the event, including title, location, dates, recurrence and alerts.

### Return value

_Promise_\
Promise that provides the created event when fulfilled.

## +today

Events occurring today.

```
static today(calendars: [Calendar]): Promise<[CalendarEvent]>
```

### Parameters

**calendars**\
_\[Calendar\]_\
Calendars to fetch events for. Defaults to all calendars.

### Return value

_Promise<\[CalendarEvent\]>_\
Promise that provides the events when fulfilled.

## +tomorrow

Events occurring tomorrow.

```
static tomorrow(calendars: [Calendar]): Promise<[CalendarEvent]>
```

### Parameters

**calendars**\
_\[Calendar\]_\
Calendars to fetch events for. Defaults to all calendars.

### Return value

_Promise<\[CalendarEvent\]>_\
Promise that provides the events when fulfilled.

## +yesterday

Events that occurred yesterday.

```
static yesterday(calendars: [Calendar]): Promise<[CalendarEvent]>
```

### Parameters

**calendars**\
_\[Calendar\]_\
Calendars to fetch events for. Defaults to all calendars.

### Return value

_Promise<\[CalendarEvent\]>_\
Promise that provides the events when fulfilled.

## +thisWeek

Events that occur this week.

```
static thisWeek(calendars: [Calendar]): Promise<[CalendarEvent]>
```

### Parameters

**calendars**\
_\[Calendar\]_\
Calendars to fetch events for. Defaults to all calendars.

### Return value

_Promise<\[CalendarEvent\]>_\
Promise that provides the events when fulfilled.

## +nextWeek

Events that occur next week.

```
static nextWeek(calendars: [Calendar]): Promise<[CalendarEvent]>
```

### Parameters

**calendars**\
_\[Calendar\]_\
Calendars to fetch events for. Defaults to all calendars.

### Return value

_Promise<\[CalendarEvent\]>_\
Promise that provides the events when fulfilled.

## +lastWeek

Events that occurred last week.

```
static lastWeek(calendars: [Calendar]): Promise<[CalendarEvent]>
```

### Parameters

**calendars**\
_\[Calendar\]_\
Calendars to fetch events for. Defaults to all calendars.

### Return value

_Promise<\[CalendarEvent\]>_\
Promise that provides the events when fulfilled.

## +between

Events that occurs between two dates.

```
static between(startDate: Date, endDate: Date, calendars: [Calendar]): Promise<[CalendarEvent]>
```

### Parameters

**startDate**\
_Date_\
Start date to fetch events for.

**endDate**\
_Date_\
End date to fetch events for.

**calendars**\
_\[Calendar\]_\
Calendars to fetch events for. Defaults to all calendars.

### Return value

_Promise<\[CalendarEvent\]>_\
Promise that provides the events when fulfilled.
