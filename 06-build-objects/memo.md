# create object

- function constructor and new

  - new

    - create new object
    - set this to new object
    - return new object

  - prototype

    - automatic set
    - memory efficiency
    - property has unique data

  - side note

    - build-in function constructor

      - new Number

      ```
      var a = new Number(3)
      ```

      - new String

      ```
      var b = new String("test")
      ```

      - possibility of fail in comparison

      ```
      var a = 3;
      var b = new Number(3)

      a == b // true
      a === b // false
      ```

- Object.create / prototype inheritance approach

  - polyfill
    - code that adds a feature which the engine MAY lack

- Class
