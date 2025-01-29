function foo(a, b) {
  a = a === null ? 0 : a; // Use 0 as default for a
  b = b === null ? "" : b; // Use empty string as default for b

  // ... more code that no longer throws errors due to null values
  console.log(a + '-' + b);
}