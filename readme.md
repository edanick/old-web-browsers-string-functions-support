
# Details

### Author: Edan
### Version: 1.0.4

A library to add support of string includes and replaceAll for old web browsers from the early ES versions that don't have those functions built in.

---

# Inustrctions

> Download "**old web browsers string functions support.js**" rename it and call it whatever you want and import it or just copy and paste the functions inside to your code base

---

# Functions

## includes

> Returns true if substring is found, false otherwise.

### Parameters
`string`: **string**\
`substring`: **string**


#### Example
```
console.log(includes('hello world', 'world'));
```

**Result**:\ 
`true` 

## replaceAll

> Returns a new string with all occurrences of a substring replaced by a new value.

### Parameters
`string`: **string**  
`search`: **string**  
`replacement`: **string**

#### Example
```js
console.log(replaceAll('hello world world', 'world', 'friend'));
```

**result**:\
`hello friend friend`