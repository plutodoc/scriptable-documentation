# Color

Stores color data including opacity.

A color can be created using a hex value, e.g. #FF0000 and optionally an alpha or it can be created using the provided system colors.

## hex

HEX representation.

_Read-only._

```
hex: string
```

## red

Amount of red in the color.

_Read-only._

```
red: number
```

## green

Amount of green in the color.

_Read-only._

```
green: number
```

## blue

Amount of blue in the color.

_Read-only._

```
blue: number
```

## alpha

Alpha of the color.

_Read-only._

```
alpha: number
```

## +black

Constructs a black color.

```
static black(): Color
```

### Return value

_Color_

A black color.

## +darkGray

Constructs a dark gray color.

### Return value

_Color_

A dark gray color.

## +lightGray

Constructs a light gray color.

```
static lightGray(): Color
```

### Return value

_Color_

A light gray color.

## +white

Constructs a white color.

```
static white(): Color
```

### Return value

_Color_

A white color.

## +gray

Constructs a gray color.

```
static gray(): Color
```

### Return value

_Color_

A gray color.

## +red

Constructs a red color.

```
static red(): Color
```

### Return value

_Color_

A red color.

## +green

Constructs a green color.

```
static green(): Color
```

### Return value

_Color_

A green color.

## +blue

Constructs a blue color.

```
static blue(): Color
```

### Return value

_Color_

A blue color.

## +cyan

Constructs a cyan color.

```
static cyan(): Color
```

### Return value

_Color_

A cyan color.

## +yellow

Constructs a yellow color.

```
static yellow(): Color
```

### Return value

_Color_

A yellow color.

## +magenta

Constructs a magenta color.

```
static magenta(): Color
```

### Return value

_Color_

A magenta color.

## +orange

Constructs a orange color.

```
static orange(): Color
```

### Return value

_Color_

A orange color.

## +purple

Constructs a purple color.

```
static purple(): Color
```

### Return value

_Color_

A purple color.

## +brown

Constructs a brown color.

```
static brown(): Color
```

### Return value

_Color_

A brown color.

## +clear

Constructs a transparent color.

```
static clear(): Color
```

### Return value

_Color_

A transparent color.

## -new Color

Constructs a color.

```
new Color(hex: string, alpha: number)
```

Constructs a new color with a hex value and optionally an alpha value. The hex value may specify the alpha value but this will be ignored if the alpha value parameter is provided. Examples of valid hex values: #ff0000, #00ff0080 #00f and #ff. The hashtag is optional.

### Parameters

**hex**

_string_

Hex value.

**alpha**

_number_

Alpha value.

## +dynamic

Creates a dynamic color.

```
static dynamic(lightColor: Color, darkColor: Color): Color
```

The dynamic color will use either its light or dark variant depending the appearance of the system.

Dynamic colors are not supported when used with `DrawContext`.

### Parameters

**lightColor**

_Color_

Color used in light appearance.

**darkColor**

_Color_

Color used in dark appearance.

### Return value

_Color_

Dynamic color.
