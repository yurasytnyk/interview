# Function Composition

Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function `fn` that is the function composition of the array of functions.

The function composition of `[f(x), g(x), h(x)]` is:  
`fn(x) = f(g(h(x)))`.

If the list of functions is empty, the composition is the identity function:  
`f(x) = x`.

You may assume each function in the array accepts one integer as input and returns one integer as output.

---

## Examples

**Example 1**

- **Input:**  
  `functions = [x => x + 1, x => x * x, x => 2 * x]`, `x = 4`
- **Output:** `65`
- **Explanation:**  
  Evaluating from right to left:
  1. Start with `x = 4`.
  2. `2 * (4) = 8`
  3. `(8) * (8) = 64`
  4. `(64) + 1 = 65`

**Example 2**

- **Input:**  
  `functions = [x => 10 * x, x => 10 * x, x => 10 * x]`, `x = 1`
- **Output:** `1000`
- **Explanation:**  
  Evaluating from right to left:
  1. Start with `x = 1`.
  2. `10 * (1) = 10`
  3. `10 * (10) = 100`
  4. `10 * (100) = 1000`

**Example 3**

- **Input:**  
  `functions = []`, `x = 42`
- **Output:** `42`
- **Explanation:**  
  The composition of zero functions is the identity function.  
  `f(x) = x`, so the output is `42`.
