"use strict";
// ============================================================
// TypeScript: Array Methods
// ============================================================
// ============================================================
// 1. NUMBER ARRAY
// ============================================================
// This array can contain only number values.
let numbers3 = [5, 6, 6, 5, 8, 2, 3, 5];
// ============================================================
// 2. MAP()
// ============================================================
// `map()` creates a NEW array by transforming
// every element of the original array.
//
// In this example:
// Each number is multiplied by 2.
//
// num -> current array element
//
// Example:
// 5 -> 10
// 6 -> 12
// 8 -> 16
let result3 = numbers3.map((num) => num * 2);
console.log(result3);
// The original array is NOT changed.
//
// numbers3:
// [5, 6, 6, 5, 8, 2, 3, 5]
//
// result3:
// [10, 12, 12, 10, 16, 4, 6, 10]
// ============================================================
// 3. FILTER()
// ============================================================
// `filter()` creates a NEW array containing only
// the elements that satisfy the given condition.
//
// Here:
// num >= 3
//
// means:
// Keep the number if it is greater than or equal to 3.
let filterNumbers = numbers3.filter((num) => num >= 3);
console.log(filterNumbers);
// The original array is also NOT changed.
//
// Original:
// [5, 6, 6, 5, 8, 2, 3, 5]
//
// Filtered result:
// [5, 6, 6, 5, 8, 3, 5]
