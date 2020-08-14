# descriptor

Prototypes manager for JavaScript

npm package [@rrangelo/descriptor](https://www.npmjs.com/package/@rrangelo/descriptor)

## Description

Prototypes manager for JavaScript

When we use a JavaScript Object prototype (the main and most used Object definition on JavaScript language). Sometimes we do use the composition, but we can't access to a super caller method. Descriptor, allow us to add a Base Object prototype adding to our Custom Object prototype.

The descriptor's objects contains new properties and methods, some likes:

* a `base` property, where we save the base prototype reference. Used to represent the single inherit.
* a `create` method, where we get a new object based on the prototype caller.
* a `maker` method, where we get a new object with started data one-line.
* a `chain` method, where we get a stringify of object (just properties NOT methods).
* a `clone` method, where we get a new instance with same data of source object.

## Getting Started

### Install

```
npm i -S @rrangelo/descriptor
```

### Use

You must include the module in your proyect with:

```
const descriptor = require('@rrangelo/descriptor');
```

Our custom objects we'll be able to access over node process, just calling the new global property `prototypes`. That means, all prototypes describes with `descriptor.describe(name, prototype);` will be adding to `prototypes` with the name defined, some like:

```
let person = {
    name: '',
    bday: {},
    hasChildren: true,
    children: [],
    get age() {
        sentences;
    },
    someMethod: function() {
        sentences;
    }
};

descriptor.describe('myPerson', person);

let pepe = prototypes.myPerson.create();
```

You also can create an object with the `maker` function, like:

```
let pancho = prototypes.myPerson.maker().name('Pancho').hasChildren(false).make();
```

_Recommendation: Use a camelCase style for name._

#### Errors

the `name` param is required to describe a prototype. Otherwise, the `describe` function will throws the `'A name must be defined'` error message.

#### Properties and Methods

Each prototype defined will contains new properties and method with its own functionalities. Below will be descriptes 

##### Properties

Below you'll find the properties descriptions.

_IMPORTANT: I RECOMMEND NOT MODIFY ANY PROPERTIES OR METHODS, ANY CHANGE CAN CAUSE MANY TROUBLES IN OTHER METHODS AND PROPERTIES._

###### `_` property

`name` property

The prototype's name.

`base` property

The based prototype from which the prototype inherits its properties and methods.

###### `base` property

This property is just a reference to `this._.base`

##### Methods

Below you'll find the methods descriptions.

_IMPORTANT: I RECOMMEND NOT MODIFY ANY PROPERTIES OR METHODS, ANY CHANGE CAN CAUSE MANY TROUBLES IN OTHER METHODS AND PROPERTIES._

###### `create` method

This method creates a new instance based on the prototype caller, adding base's methods and properties if is specified.

Without base

```
let obj = propertypes.myperson.create();
```

with base

```
let obj = propertypes.myperson.create(prototypes.baseptototype);
```

###### `maker` method

This method retrives an intemediate object prototype to create a new object's instance, this intemediate allows you to load values in the same time.

```
let obj = prototypes.myperson.maker()
    .name('Pepe')
    .bday(new Date(1980, 10,9))
    .hasChildren(true)
    .make();
```

**`make` method**

This method ends the `maker` method to create the new prototype's instance. 

```
let obj = prototypes.myperson.maker().name('Pepe').make();
```

###### `chain` method

This methods gives the string representation of object's properties and values

```
let str = obj.chain();

console.log(str); 
```
Expected: 
```
{ name: "Pepe", bday: "Tue Aug 11 1980 20:22:49 GMT-0400 (hora estándar de Venezuela)", hasChildren: false, children: [] }
```

###### `clone` method

This methods gives a new instance of object. It means, if you change any value, the other object will not changes.

```
let ob = obj.clone();
```

## Code Coverage

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rrangelo_descriptor&metric=alert_status)](https://sonarcloud.io/dashboard?id=rrangelo_descriptor)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=rrangelo_descriptor&metric=coverage)](https://sonarcloud.io/dashboard?id=rrangelo_descriptor)

[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=rrangelo_descriptor&metric=security_rating)](https://sonarcloud.io/dashboard?id=rrangelo_descriptor)

If you want to see the coverage, please go to: 

[SonarCloud Project Coverage](https://sonarcloud.io/dashboard?id=rrangelo_descriptor)