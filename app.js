console.log('Unit Testing');
// ----------------------------------------------------------------------------------------------------------------

//                                            UNIT TESTING

// ----------------------------------------------------------------------------------------------------------------

// As your coding gets more complex, you'll need to write more code that's designed to test your initial 
//      code. Even though code can appear to work the way you want it to, there will often be edge cases you
//      didn't consider, and tests can make sure your code works even when given unexpected parameters.

// ----------------------------------------------------------------------------------------------------------------

//      WRITING TESTS

// --------------------------------------------------------------

// While trying to find edge cases is important, it's extremely time consuming and tedious, not to mention prone
//      to human error. So instead of slowly trying to figure out one issue at a time, you can create a code that
//      will automate the testing process.

// ----------------------------------------------------------------------------------------------------------------

//      JASMINE

// --------------------------------------------------------------

// Each coding language has various testing libraries you can test your code with, and a popular framework for
//      JavaScript is Jasmine. If you check index.html, you can see a lot of script tags with "jasmine" in the 
//      url, this gives you access to Jasmine for testing. There are different ways to access it through
//      downloads, but that's not important for now.

// See the "taxes.js" file, it's a simple function to calculate taxes based on income. But right below it is
//      "taxes.test.js", which is a file we'll use to run the test on taxes.js. Make sure that the 'test' file
//      runs after the original file or there won't be anything to test. Jasmine also has its own coding syntax,
//      which we'll be using in the test file. To use Jasmine without downloading anything, we need to add a few 
//      scripts to our html file:

// (in our head)

// <link rel="stylesheet" href="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/jasmine.css" />


// (in our body)

// <script src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/jasmine.js"></script>

// <script src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/jasmine-html.js"></script>

// <script src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/boot0.js"></script>

// <script src="https://unpkg.com/jasmine-core@4.1.0/lib/jasmine-core/boot1.js"></script>

// --------------------------------------------------------------

// JASMINE SYNTAX

// --------------------------------------------------------------

// Jasmine makes use of "it", a function that accepts two arguments: a string, and a callback to the function 
//      that is being tested. The string is used to describe what the function being tested should do, so we can
//      know exactly what outputs we're expecting from out code.

//                          it('should have a particular outcome', function());

//      This "it" statement in and of itself is called a "spec", and within the spec you can place multiple tests.
//      The test starts with a function called "expect()". Our argument for the expect function is the original 
//      function we're testing, given its own argument. For example, if we want a function to multiply a number by
//      3, a test might look something like:

//                          expect(timesThree(3).toEqual(9);)

//      The "toEqual" code is called a "matcher", but there are multiple matchers you can use for mutiple kinds of
//      tests. But the argument for the matcher should be the outcome you're expecting to have, (in this case, a 
//      function that multiplies by 3 should take in 3 and output 9).

// --------------------------------------------------------------

// If you go to the test file and un-comment the first spec, you can see how a failed test looks. The webpage for
//      index.html will show the Jasmine test, and you'll get a bright red banner telling you that your test 
//      failed, and which spec holds the failure. In this case, it will specify "should fail this test", and say
//      "Expected 2 to equal 3". 

// Underneath the example test is a real test for the taxes file. We're testing to see both if the function can
//      differentiate between high income tax-brackets and low income tax-brackets, and that the mathematical 
//      functions work appropriately, and as you can see on the webpage, they do. The banner is green and says 
//      "2 specs, 0 failures".

// ----------------------------------------------------------------------------------------------------------------

//      MATCHERS

// --------------------------------------------------------------

// The "toEqual" in our test is called a matcher, but there are multiple other matchers you can use as well:

// 1. toEqual(expected) -
//      compares actual value to the expected value

// 2. toBe(expected) - 
//      similar to toEqual but uses strict equality (===)

// 3. toBeDefined() / toBeUndefined() -
//      checks to see that the value either defined or undefined

// 4. toBeNull() -
//      checks to see that value is null

// 5. toBeTruthy() / tobeFalsy() -
//      checks to see that value is truthy/falsy

// 6. toContain(expected) -
//      see if the value contains an expected value (often used for strings and arrays)

// 7. toBeLessThan(expected) / toBeGreaterThan(expected) -
//      see if the actual value is lesser or greater than the expected value

// 8. toBeClose(expected,precision) -
//      to see if the actual value is close to the expected value (within specified precision)

// 9. toMatch(regexp) -
//      to see if the value matches a regular expression

// 10. toThrow() / toThrowError() -
//      to see if a function throws an expection/allows you to check the error message

// ----------------------------------------------------------------------------------------------------------------

//      DESCRIBE

// --------------------------------------------------------------

// Currently, the successful tests will all return "should _____" on our webpage, because all of our test
//      functions begin with "it". In order to have a better immediate understanding of which functions are 
//      related, you can wrap all of them in a similar function called "describe", also using a string and a 
//      function as the two arguments.

// Go back to the taxes.js file, comment out the "real Jasmine test" section, and un-comment the "describe test"
//      section. Now when you look at the webpage, it will give a header explaining what the test is for and 
//      return the two successful "should" statements as bullet points. Now if you have mulitple areas that need
//      testing, you can put the functions that pertain to specific areas together in their own 'describe'
//      function. 

// ----------------------------------------------------------------------------------------------------------------

//      TEST CLEAN UP

// --------------------------------------------------------------

// Some functions have long lasting effects, such as writing to a database or changing the html of a webpage, so
//      testing can become difficult as the functions we need to test can be different on a changed webpage than
//      they are in isolation. To get around this, we can use certain tricks to clean up the side effects of
//      running our code to test things more accurately.

// Go to the taxes.js file and look for the "test clean-up" example. You can see there's a text input element,
//      and a function to push a value into an empty array. Type your name into the input, then run the 
//      submitForm() function in the console. Now enter "names" into the console and you can see your name.

// Now check the test file. It's testing to see that your name is accurately being entered into the form, and so
//      long as your name is Mark and it's the first time a name is being entered, it works perfectly. But in a 
//      more complicated function that saves information into a database, the "names" array will have a length
//      greater than 1, and not everyone who uses the input will be named Mark.

// We're also setting nameInput.value to "Mark" in our test code itself, so the code will always pass the test,
//      making it an unuseful test. In a more accurate test, we would need to reset "names" to an empty array each
//      time we run the submitForm() function, as well as set the value as an empty string in our test code. The
//      way we can do this in Jasmine is with a function called "afterEach()". This code will look for an "it"
//      function and run the code nested inside "after each" of the "it" functions in the code.

// Imagine we were pushing for a foothold in a German market and wanted to make sure the servers could handle 
//      German letters. We would run an addition test using those characters, but the test would fail, because 
//      the "names" array would have a length of 2, not 1, and because that test name would likely not be "Mark".
//      By adding the afterEach function to clear the array and value after each test, we can run subsequent tests
//      without leaving unwanted side effects in the variables we're trying to test.

// ----------------------------------------------------------------------------------------------------------------

//      HOOKS

// --------------------------------------------------------------

// The "afterEach" function in the above example is called a "hook", and there are several different possible 
//      hooks.

// 1. beforeAll() -
//      Executes once, before any tests are run. This is useful if you want specific conditions for the code you
//      are running

// 2. afterAll() -
//      Executes once, after all tests have been run. Useful as a hard reset to "clean" up all changes

// 3. beforeEach() -
//      Executes before each inidividual spec ("it" function), useful when all the tests require very specific 
//      conditions and can't rely on setting up the conditions once and incorporating the side effects of previous
//      tests

// 4. afterEach() -
//      Executes after each individual spec, useful when the tests create a specific environment that you don't 
//      want to run the subsequent tests in

// ----------------------------------------------------------------------------------------------------------------

//      BEST PRACTICES

// --------------------------------------------------------------

// UNIT TESTING

// --------------------------------------------------------------

// Narrow in scope, verifying that a small module of code does what it's intended to do. They can be very simple,
//      very easy to write, and they work well with "pure"* functions (functions with no side effects).

// --------------------------------------------------------------

// INTEGRATION TESTING

// --------------------------------------------------------------

// Broad scope, tests to see that all the individual modules of code work in conjuction to accomplish the larger
//      goal. They are very valuable, but also time consuming and difficult to write/maintain, and are used to test
//      "impure"* functions (functions with side effects).

// --------------------------------------------------------------

// If you were to use the taxes file as an example, the code we have in our test file already is all unit tests,
//      whereas if we had an automated system to email users the information on their taxes, we would need to
//      access usernames, emails, the numbers generated from calculateTaxes(), and plenty of other functions, and
//      that process would require intergration testing.


//                                                                  **say we had two functions that added new
//                                                                      values to an array. A 'pure' function
//                                                                      would copy the old array, and create a new
//                                                                      one with that additional value. An 'impure'
//                                                                      function would add the value to the old
//                                                                      array, create the side effect of changing
//                                                                      an array rather than making a new one.**

// --------------------------------------------------------------

//      HELPFUL RULES

// --------------------------------------------------------------

// 1. Test every function at least once:
//      Never assume a function works, always make sure it at least performs its basic intended purpose.

// 2. Think about edge cases:
//      Assume crazy people will put random nonsense into your functions, and try to make sure that doing so won't
//      break your code.

// 3. Write code that's easy to test:
//      The more convoluted and dense your code is, the harder it'll be to make sure it works, and the harder it'll
//      be to dubug if it doesn't.

// 4. Don't mix logic and UI:
//      Say you have a game of RPS. After the game, you want to display who won. Rather than make one function that
//      checks which option was selected, compares both options, decides who won, and announces who won, write
//      each of those steps as their own function. That way, if something breaks along the way, it's easier to
//      isolate each function and fix the one you need to.