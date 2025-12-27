**7 Nov, 25 | 27 Dec, 25**

# Getting Start with Unit & Integration Testing

## 1: Overview, What and Why of Tests and TDD

- `What is testing?`

  - Simply verifying if something works as expected

- `Why is testing?`

  - Software bugs are, unfortunately, very common in the software development process.
  - NIST reported in 2002 that software bugs cost the U.S. economy $59.5 billion annually. In 2018, NIST found that software errors cause 60-70% of data breaches.
  - Thorough software testing and quality assurance can prevent security vulnerabilities and protect sensitive data.
  - Effective software testing and quality control are important for preventing economic and security consequences of buggy software issues.

- Topics We Will Learn In This Module

  - What is testing and why it's important
  - Set up the test environment and write the first tests
  - Writing more Tests with errors and error messages
  - Integration tests and testing best practices
  - Let's explore some advanced testing concepts
  - Mocking and Spies
  - Practise Module & Diving Deep into the Mocking
  - Testing The Dom

- `Types of Testing`:

  - Manual Testing (Unit test, Integration Test, and End-to-End test)
    - cons:
      - incomplete coverage
      - time-consuming and tedious
      - not reliable - risk of human error
  - Automated Testing
    - cons:
      - maximum test coverage
      - reusability (by test script)
      - reliable & scalable
      - less error-prone

- `Manual Testing VS Automated Testing`

  - `Unit Testing`

    - **What is a unit**?
      - a smaller building block of our app — typically functions and classes, in a framework like Angular or React.
      - unit —> bunch of units —> entire app (combining all the units)
    - Testing all the units of the building blocks of the application, standalone.
    - **Purpose of Unit Test**: The primary goal of unit testing is to take the smallest piece of testable software in the application, isolate it from the remainder of the code, and determine whether it behaves exactly as you expect.
    - **Benefits of Unit Testing**:
      - Early bug detection
      - Faster debugging
      - Improve code quality
      - Facilitates refactoring
      - simplifies integration testing
      - cost-effective
    - Unit tests are backed by integration tests

  - `Integration Testing`

    - Testing the combination of building blocks or units.
    - Checking if they work together.

  - `End-to-End (E2E) Testing`

  ![alt text](/Module_1/images/image-1.PNG)
  ![alt text](/Module_1/images/image-2.PNG)

- `TDD (Test Driven Development)`

![image.png](/Module_1/images/image-3.PNG)

- `Testing Setup`

- Automated Tests: Test Runner + Assertion Library
- **What does the test runner do:**
  - Runs the testing codes
  - Automatically detect and run
  - Giving feedback
  - e.g. Jest, Karm
- **What is an assertion library?**
  - Defining the expectations
  - checking if the expectations are met
  - sync async expectations
  - e.g. Jest, Chai

## 2: Jest vs Vitest and Writing Our First Unit Test

- `Vitest`

  - [Vitest](https://vitest.dev/guide/)
  - pros:
    - A bit faster
    - Supports ES modules out of the box
    - No extra config needed
    - Don’t need any extra tools or workflow
    - Vitest supports in-source testing (testing can be done wihtin same file of the source code)

- `Jest`

  - cons:
    - Slightly slow
    - Barely supports ES modules (experimental)
    - Setting up can be very annoying
    - Often need extra tools or workflow
    - it doesn't support in-source testing

- what is vitest

- `Commands`

```bash
yarn init -y
```

```bash
yarn add vitest -D
```

- `yarn.lock` and `node_modules` will be created.

- create math.js file in root directory
- create math.test.js/math.spec.js file in root directory (we are not doing here in source testing, we will create different file to write test code)
- write required script in package.json file:
- to run the test, we have to write the following script:

```bash
  "scripts": {
    "test": "vitest"
  },
```

- run the test:

```bash
yarn test
```

## 3: Best Practices for Writing Tests and AAA Pattern

- `AAA Pattern`

  - A (arrange) - arrange the data
  - A (action) - perform the action
  - A (assert) - evaluate the expectation

**27 Dec, 25**

- for observing detail output:

```bash
  "scripts": {
    "test": "vitest --reporter verbose"
  },
```

## 4: Writing Test for Thrown Errors and Test with Multiple Assertions

- creat and test transformToNumber.js and transformToNumber.spec.js file
- we can write multiple assertions within a single test case

**8 Nov, 2025 - 27 Dec, 25**

## 5: Solution of the First Task and Writing Integration Tests

**27 Dec, 25**

- creat and test stringLength.js and stringLength.spec.js file

- `integration test`
- creat and test cleanNumbers.js and cleanNumbers.test.js file

## 6: Practising Some Test and Organizing Tests

- creat and test validation.js and validation.test.js file

- part_2

## 7: Testing Asynchronous Code With or Without Callback

- part_3

```bash
yarn add crypto-js
```

```bash
node ./async.js
```

## 8: Using Testing Hooks

## 9: Some Tips and Getting Started with Mock and Spies

- we can write nested describe block / test suite
- we can write hook within describe block / test suite
- we can also do concurrent test (a group of tests will run at the same time)

```bash
it.concurrent("should store the provided email value", () => {
  //   const testEmail = 'test@test.com';
  const user = new User(testEmail);
  expect(user.email).toBe(testEmail);
});
```

- part_4

```bash
node ./app.js
```

- after running the above command, data.txt will be created
- [vdo link ph](https://web.programming-hero.com/l2-b3-reward-courses/video/l2-b3-reward-courses-9-some-tips-and-getting-started-with-mock-and-spies)

- Test Double

  - it is a generic term for any case where you replace a production object for testing purpose Test Doubles

- Test Doubles
  - Mocks
    - A mock is a test double object that replaces a real object or function with a simplified version
      that behaves in a predictable way for testing purposes. It is used to control the behavior of the code under test by defining how certain functions should behave and what values they should return during a test.
  - Spies
    - A spy is a test double object that records information about how a function is called, such as the number of times it is called, with what arguments, etc. It can also be used to assed that certain functions were called during execution of a test.

## 10: Basics of Mock and Spies

- [watch again](https://web.programming-hero.com/l2-b3-reward-courses/video/l2-b3-reward-courses-10-basics-of-mock-and-spies)
