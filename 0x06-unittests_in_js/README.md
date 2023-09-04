# 0x06. Unittests in JS

This project covers the following concepts:

+ Using Mocha to write a test suite
+ Using different assertion libraries (Node or Chai)
+ Presenting long test suites
+ Use of spies
+ Use of stubs
+ Use of hooks
+ Unit testing with Async functions
+ Writing integration tests with a small node server

## Dependencies

+ Mocha
+ Chai
+ Sinon
+ Express

| File | Test file | Description |
|------|:----------|:------------|
| [0-calcul.js](0-calcul.js) | [0-calcul.test.js](0-calcul.test.js) | Basic test with Mocha and Node assertion library |
| [1-calcul.js](1-calcul.js) | [1-calcul.test.js](1-calcul.test.js) | Combining descriptions |
| [2-calcul_chai.js](2-calcul_chai.js) | [2-calcul_chai.test.js](2-calcul_chai.test.js) | Basic test using Chai assertion library |
| [utils.js](utils.js) , [3-payment.js](3-payment.js) | [3-payment.test.js](3-payment.test.js) | Spies |
| [4-payment.js](4-payment.js) | [4-payment.test.js](4-payment.test.js) | Stubs |
| [5-payment.js](5-payment.js) | [5-payment.test.js](5-payment.test.js) | Hooks |
| [6-payment_token.js](6-payment_token.js) | [6-payment_token.test.js](6-payment_token.test.js) | Async tests with done |
| | [7-skip.test.js](7-skip.test.js) | Skip |
| [8-api/api.js](8-api/api.js) | [8-api/api.test.js](8-api/api.test.js) | Basic Integration testing |
| [9-api/api.js](9-api/api.js) | [9-api/api.test.js](9-api/api.test.js) | Regex integration testing |
| [10-api/api.js](10-api/api.js) | [10-api/api.test.js](10-api/api.test.js) | Deep equality & Post integration testing |

## Testing
 Run tests with <code>npm test api.test.js</code>
