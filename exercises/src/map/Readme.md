# Array Transformation Using a Mapping Function

Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The transformed array should satisfy the condition:  
`returnedArray[i] = fn(arr[i], i)`

**Note:** Solve this without using the built-in `Array.map` method.

---

## Examples

### Example 1
- **Input:**  
  `arr = [1, 2, 3]`  
  `fn = function plusone(n) { return n + 1; }`  
- **Output:** `[2, 3, 4]`  
- **Explanation:**  
  The function `plusone` increases each value in the array by one.  
  ```javascript
  const newArray = map(arr, plusone); // [2, 3, 4]

### Example 2
- **Input:**  
  `arr = [1, 2, 3]`  
  `fn = function plusI(n, i) { return n + i; }`  
- **Output:** `[1, 3, 5]`  
- **Explanation:**  
  The function `plusI` adds the index of each element to its value.

### Example 3
- **Input:**  
  `arr = [10, 20, 30]`  
  `fn = function constant() { return 42; }`  
- **Output:** `[42, 42, 42]`  
- **Explanation:**  
  The function `constant` always returns `42`, regardless of the input.
