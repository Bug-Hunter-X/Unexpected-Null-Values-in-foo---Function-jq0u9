# Unexpected Null Values in JavaScript Function

This repository demonstrates a common JavaScript error involving unexpected null values and how to handle them properly. The `foo()` function processes two parameters (`a` and `b`).  While the current implementation checks for null values, it simply returns null without providing alternative behavior. This can lead to unexpected results or errors down the stream.

The solution demonstrates how to provide default values for `a` and `b` when they are null, ensuring that the function behaves as expected even in the absence of valid input values. This approach enhances robustness and prevents unexpected behavior related to null values.

## Bug

The original function `foo()` returns `null` when either `a` or `b` is `null`.  In many situations, returning `null` is not desired, as it can cause downstream errors.

## Solution

The solution implements default values for `a` and `b`, making the function more robust and preventing unexpected results when working with `null` values.  Default values provide a more graceful way of handling potential `null` values.