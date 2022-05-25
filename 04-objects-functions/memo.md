# Object in memory

- Primitive property
- Object property
- Function / Method

# framework aside: faking naming space

# name space

- a container for variables and functions

# JSON

- JavaScript Object Notation
- json has more strict data format

# first class functions

- everything you can do with other types can apply to function too!
- assign to variable, pass them around, create them on the fly

# function can have

- Primitive
- Object
- Function
- unique to function
  - Name (Optional / can be anonymous)
  - Code / invocable

# expression

- a unit of a code that results in a value
- function expression

# statement

- return nothing
- function statement

# by value / by reference

- by value for primitive values
- by reference for all object including functions

# mutate

- to change something

# Execution Context / creation phase

- variable environment
- outer lexical environment / scope chain
- this

# array

# syntax parser

- translate your code to machine code
- parser can change your code before run the code

# semicolon insertion

- should pub semicolon
- JS engine insert semicolon automatically
- but that can be a bug hard to track in the sample below

```
return
{
  name: 'Jack'
}
```

# closure

- language feature
- keep variable
  - execution context / outer scope
  - scope chain / lexical environment
  - gavage collection
