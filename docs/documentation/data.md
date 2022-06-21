# Data

Raw data representation.

Raw data representation of strings, files and images.

## +fromString

Creates data from string.

```
static fromString(string: string): Data
```

The provided string is assumed to be UTF8 encoded. If the string is not UTF8 encoded, the function will return null.

### Parameters

**string**

_string_

String to create data from.

### Return value

_Data_

Data representation of string.

## +fromFile

Reads data from file path.

```
static fromFile(filePath: string): Data
```

Reads the raw data of the file at the specified file path.

### Parameters

**filePath**

_string_

Path of file to read data from.

### Return value

_Data_

Data representation of file.

## +fromBase64String

Creates data from base64 encoded string.

```
static fromBase64String(base64String: string): Data
```

The supplied string must be base64 encoded otherwise the function will return null.

### Parameters

**base64String**

_string_

Base64 encoded string to create data from.

### Return value

_Data_

Data representation of string.

## +fromJPEG

Creates data from JPEG image.

```
static fromJPEG(image: Image): Data
```

### Parameters

**image**

_Image_

JPEG image to convert to data.

### Return value

_Data_

Data representation of image.

## +fromPNG

Creates data from PNG image.

```
static fromPNG(image: Image): Data
```

### Parameters

**image**

_Image_

PNG image to convert to data.

### Return value

_Data_

Data representation of image.

## -toRawString

Creates a string from the data.

```
toRawString(): string
```

The data is assumed to represent a UTF8 encoded string. If the string is not UTF8 encoded string, the function will return null.

### Return value

_string_

Data converted to string.

## -toBase64String

Creates a base64 encoded string.

```
toBase64String(): string
```

Creates a base64 encoded string from the data.

### Return value

_string_

Base64 encoded string.

## -getBytes

Gets bytes from data.

```
getBytes(): [number]
```

### Return value

_\[number\]_\
Array of bytes.
