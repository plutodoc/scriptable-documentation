# ContactsGroup

Group of contacts.

A contacts container may have several groups of contacts. A contact can only belong to a single contacts container but may belong to zero or more contacts groups. For example, an iCloud account has only one container but may have many groups.

## identifier

Identifier of the contacts group.

_Read-only._

```
identifier: string
```

## name

Name of the contacts group.

```
name: string
```

## -new ContactsGroup

Constructs a contacts group.

```
new ContactsGroup()
```

In order to add the group to your address book, you must queue it for insertion using `ContactsGroup.add()`. When you're done making changes to the address book you should call `Contact.persistChanges()` to persist the changes.

## +all

Fetches contacts groups.

```
static all(containers: [ContactsContainer]): Promise<[ContactsGroup]>
```

Fetches the contacts groups in the specified containers. A group can be in only one container.

### Parameters

**containers**

_\[ContactsContainer\]_

Container to fetch contacts groups from.

### Return value

_Promise<\[ContactsGroup\]>_

Promise that provides the contacts groups when fulfilled.

## -addMember

Adds a contact to the group.

```
addMember(contact: Contact)
```

In order to persist the change, you should call `Contact.persistChanges()`. It is important that the contact is added to the address book. To add the contact to the address book, you should queue it for insertion using `Contact.add()` before persisting the changes.

### Parameters

**contact**

_Contact_

Contact to add to the group.

## -removeMember

Removes a contact from the group.

```
removeMember(contact: Contact)
```

In order to persist the change, you should call `Contact.persistChanges()`. It is important that the contact is added to the address book. To add the contact to the address book, you should queue it for insertion using `Contact.add()` before persisting the changes.

### Parameters

**contact**

_Contact_

Contact to add to the group.

## +add

Queues a contacts group to be added.

```
static add(group: ContactsGroup, containerIdentifier: string)
```

After you have created a group, you must queue the group to be added to the address book and invoke `Contact.persistChanges()` to persist the changes to the address book.

For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.

### Parameters

**group**

_ContactsGroup_

Contacts group to queue to be added.

**containerIdentifier**

_string_

Optional. Identifier of container to add the contacts group to. If null is specified, the group will be added to the default container.

## +update

Queues an update to a contacts group.

```
static update(group: ContactsGroup)
```

After you have updated one or more properties on a contacts group, you must queue the group to be updated and invoke `Contact.persistChanges()` to persist the changes to the address book.

For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.

### Parameters

**group**

_ContactsGroup_

Contacts group to queue to be updated.

## +delete

Queues a contacts group to be deleted.

```
static delete(group: ContactsGroup)
```

To delete a contacts group, you must queue the group for deletion and invoke `Contact.persistChanges()` to persist the changes to the address book.

For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.

### Parameters

**group**

_ContactsGroup_

Contacts group to queue to be deleted.
