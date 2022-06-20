# Contact

Contact in the address book.

The type represents a contact in the address book. You can use the type to fetch and update contacts in the address book. If you are signed into multiple accounts on the device, you may have multiple sources that populate the address book. A source is is represented as a `ContactsContainer`. A contact may be in only one container. A CardDAV account usually has a single container whereas an Exchange account may have multiple containers.

## identifier

Uniquely identifies the contact on the device.

_Read-only._

```
identifier: string
```

## namePrefix

Name prefix.

```
namePrefix: string
```

## givenName

Given name.

```
givenName: string
```

## middleName

Middle name.

```
middleName: string
```

## familyName

Family name.

```
familyName: string
```

## nickname

Nickname.

```
nickname: string
```

## birthday

Birthday.

```
birthday: Date
```

## image

Profile picture.

```
image: Image
```

## emailAddresses

Email addresses.

An array of objects on the following form:

```
{
  "identifier": "UUID-ABC-123",
  "label": "Home",
  "localizedLabel": "Home",
  "value": "my@example.com"
}
```

The identifier uniquely identifies the email address on this device. The label is a description of the email address and the value holds the email address itself.

When updating this property, you must set the entire array of email addresses that you would like to store on the contact. Each value in the array must have the "value" key. The other keys are optional.

```
emailAddresses: [{string: string}]
```

## phoneNumbers

Phone numbers.

An array of objects on the following form:

```
{
  "identifier": "UUID-ABC-123",
  "label": "Home",
  "localizedLabel": "Home",
  "value": "(111)234-5678"
}
```

The identifier uniquely identifies the phone number on this device. The label is a description of the phone number and the value holds the phone number itself.

When updating this property, you must set the entire array of phone numbers that you would like to store on the contact. Each value in the array must have the "value" key. The other keys are optional.

```
phoneNumbers: [{string: string}]
```

## postalAddresses

Postal addresses.

An array of objects on the following form:

```
{
  "identifier": "UUID-ABC-123",
  "label": "Home",
  "localizedLabel": "Home",
  "street": "240  Terry Lane",
  "city": "New York",
  "state": "New York",
  "postalCode": "10001",
  "country": "United States of America"
}
```

The identifier uniquely identifies the pstal address on this device. The label is a description of the phone number and the value holds the phone number itself.

When updating this property, you must set the entire array of postal addresses that you would like to store on the contact. The "identifier" key is optional.

```
postalAddresses: [{string: string}]
```

## socialProfiles

Social profiles.

An array of objects on the following form:

```
{
  "identifier": "UUID-ABC-123",
  "label": "Twitter",
  "localizedLabel": "Twitter",
  "service": "Twitter",
  "url": "https://twitter.com/scriptableapp",
  "userIdentifier": null,
  "username": "scriptableapp"
}
```

The identifier uniquely identifies the social profile on this device. The label is a description of the social profile, the service is the social profile's service name, the URL contains a link to the social profile, the userIdentifier is the identifier of the social profile and the username is the name for the social profile.

When updating this property, you must set the entire array of social profiles that you would like to store on the contact. The "identifier" key is optional.

```
socialProfiles: [{string: string}]
```

## note

Note for the contact.

For security reasons, a contact's notes cannot be accessed in Siri, the Shortcuts app and in a notification.

```
note: string
```

## urlAddresses

URL addresses.

When updating this property, you must set the entire array of URL addresses that you would like to store on the contact. The "identifier" key is optional.

```
urlAddresses: [{string: string}]
```

## dates

Dates.

When updating this property, you must set the entire array of dates that you would like to store on the contact. The "identifier" key is optional.

```
dates: [{string: any}]
```

## organizationName

Name of the organization associated with the contact.

```
organizationName: string
```

## departmentName

Name of the department associated with the contact.

```
departmentName: string
```

## jobTitle

The contact's job title.

```
jobTitle: string
```

## isNamePrefixAvailable

Whether or not name prefix is available.

_Read-only._

The `namePrefix` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isNamePrefixAvailable: bool
```

## isGiveNameAvailable

Whether or not given name is available.

_Read-only._

The `givenName` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isGiveNameAvailable: bool
```

## isMiddleNameAvailable

Whether or not middle name is available.

_Read-only._

The `middleName` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isMiddleNameAvailable: bool
```

## isFamilyNameAvailable

Whether or not family name is available.

_Read-only._

The `familyName` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isFamilyNameAvailable: bool
```

## isNicknameAvailable

Whether or not nickname is available.

_Read-only._

The `nickname` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isNicknameAvailable: bool
```

## isBirthdayAvailable

Whether or not birthday is available.

_Read-only._

The `birthday` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isBirthdayAvailable: bool
```

---

## isEmailAddressesAvailable

Whether or not email addresses are available.

_Read-only._

The `emailAddresses` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isEmailAddressesAvailable: bool
```

## isPhoneNumbersAvailable

Whether or not phone numbers are available.

_Read-only._

The `phoneNumbers` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isPhoneNumbersAvailable: bool
```

## isPostalAddressesAvailable

Whether or not postal addresses are available.

_Read-only._

The `postalAddresses` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isPostalAddressesAvailable: bool
```

## isSocialProfilesAvailable

Whether or not social profiles are available.

_Read-only._

The `socialProfiles` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isSocialProfilesAvailable: bool
```

## isImageAvailable

Whether or not image is available.

_Read-only._

The `image` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isImageAvailable: bool
```

## isNoteAvailable

Whether or not note is available.

_Read-only._

The `note` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isNoteAvailable: bool
```

## isURLAddressesAvailable

Whether or not URL addresses are available.

_Read-only._

The `urlAddresses` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isURLAddressesAvailable: bool
```

## isOrganizationNameAvailable

Whether or not organization name is available.

_Read-only._

The `organizationName` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isOrganizationNameAvailable: bool
```

## isDepartmentNameAvailable

Whether or not department name is available.

_Read-only._

The `departmentName` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isDepartmentNameAvailable: bool
```

---

## isJobTitleAvailable

Whether or not job title is available.

_Read-only._

The `jobTitle` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isJobTitleAvailable: bool
```

## isDatesAvailable

Whether or not dates are available.

_Read-only._

The `date` property may not be available if the container does not support it. In that case any value set on the property will be ignored.

```
isDatesAvailable: bool
```

## -new Contact

Constructs a contact.

```
new Contact()
```

In order to add the contact to your address book, you must queue it for insertion using `Contact.add()`. When you're done making changes to the address book you should call `Contact.persistChanges()` to persist the changes.

## +all

Fetches contacts.

```
static all(containers: [ContactsContainer]): Promise<[Contact]>
```

Fetches the contacts in the specified containers. A contact can be in only one container.

### Parameters

**containers**

_\[ContactsContainer\]_

Containers to fetch contacts from.

### Return value

_Promise<\[Contact\]>_

Promise that provides the contacts when fulfilled.

## +inGroups

Fetches contacts in groups.

```
static inGroups(groups: [ContactsGroup]): Promise<[Contact]>
```

Fetches the contacts in the specified contacts groups. A contact may belong to many groups.

### Parameters

**groups**

_\[ContactsGroup\]_

Groups to fetch contacts from.

### Return value

_Promise<\[Contact\]>_

Promise that provides the contacts when fulfilled.

## +add

Queues a contact to be added.

```
static add(contact: Contact, containerIdentifier: string)
```

After you have created a contact, you must queue the contact to be added to the address book and invoke `Contact.persistChanges()` to persist the changes to the address book.

For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.

### Parameters

**contact**

_Contact_

Contact to queue to be added.

**containerIdentifier**

_string_

Optional. Identifier of container to add the contact to. If null is specified, the contact will be added to the default container.

## +update

Queues an update to a contact.

```
static update(contact: Contact)
```

After you have updated one or more properties on a contact, you must queue the contact to be updated and invoke `Contact.persistChanges()` to persist the changes to the address book.

For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.

### Parameters

**contact**

_Contact_

Contact to queue to be updated.

## +delete

Queues a contact to be deleted.

```
static delete(contact: Contact)
```

To delete a contact, you must queue the contact for deletion and invoke `Contact.persistChanges()` to persist the changes to the address book.

For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.

### Parameters

**contact**

_Contact_

Contact to queue to be deleted.

## +persistChanges

Persist queued changes to the address book.

```
static persistChanges(): Promise
```

Call this function to persist changes queued with `Contact.add()`, `Contact.update()` and `Contact.delete()`.

For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.

### Return value

_Promise_

Promise that fulfills when the changes have been persisted. The promise carries no value.
