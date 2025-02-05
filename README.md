# JavaScript setTimeout Closure Issue

This repository demonstrates a common closure issue in JavaScript when using `setTimeout` within a loop.  The expected behavior is to print numbers 0-9 after a one-second delay each. However, due to the way closures work, the loop completes before the `setTimeout` callbacks are executed, leading to all callbacks using the final value of `i` (which is 10). 

The solution showcases how to use `let` to create a new scope for each iteration, ensuring the correct value of `i` is captured by each callback.