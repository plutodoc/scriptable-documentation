# ContactsContainer

Collection of contacts.

If you're signed into multiple accounts on your device, you may have multiple contact containers. A contact can be in only one container. CardDAV accounts usually have a single container whereas Exchange accounts may have multiple containers. A container may have multiple groups. While a single contact can only belong to one container, a contact may belong to many groups.

## identifier

Identifier of the contacts container.

_Read-only._

```
identifier: string
```

## name

Name of the contacts container.

_Read-only._

```
name: string
```

## +default

Fetches default contacts container.

```
static default(): Promise<ContactsContainer>
```

### Return value

_Promise_

Promise that provides the default contacts container when fulfilled.

## +all

Fetches all contacts containers.

```
static all(): Promise<[ContactsContainer]>
```

### Return value

_Promise<\[ContactsContainer\]>_

Promise that provides all contacts containers when fulfilled.

## +withIdentifier

Fetches a contacts container.

```
static withIdentifier(identifier: string): Promise<ContactsContainer>
```

### Parameters

**identifier**

_string_

Identifier of the contacts container to fetch.

### Return value

_Promise_

Promise that provides the contacts container when fulfilled.
