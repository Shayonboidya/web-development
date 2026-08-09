// ============================================
// slice() and reduce()
// ============================================

// slice() -> Takes a portion of an array
//            and returns a NEW array.
//
// reduce() -> Combines all elements of an array
//             into a single value.
//
// Easy way to remember:
//
// slice()  -> Select / cut a part of an array
// reduce() -> Reduce many values into one value



// ============================================
// slice()
// ============================================

let frutes = ["mango", "orange", "apple", "banana", "grap"];

// slice(start, end)
//
// start -> index where slicing starts (included)
// end   -> index where slicing stops (NOT included)
//
// Index:
//
// 0 -> mango
// 1 -> orange
// 2 -> apple
// 3 -> banana
// 4 -> grap

let slice_frutes = frutes.slice(1, 3);

console.log(slice_frutes);

// Output:
// [ 'orange', 'apple' ]

// Why?
//
// Start from index 1:
// orange
//
// Stop before index 3:
// banana is NOT included.
//
// So:
// index 1 -> orange  ✅
// index 2 -> apple   ✅
// index 3 -> banana  ❌


// Important:
// slice() does NOT modify the original array.

console.log(frutes);

// Output:
// [ 'mango', 'orange', 'apple', 'banana', 'grap' ]



// ============================================
// reduce()
// ============================================

// reduce() is used when we want to
// combine all array elements into ONE value.
//
// Common uses:
// - Sum
// - Product
// - Average
// - Finding maximum/minimum
// - Counting
// - Creating objects from arrays

let numbers = [10, 20, 30, 40, 50];


// reduce() callback receives:
//
// accumulator -> stores the result from previous iteration
// elem        -> current element
// idx         -> current index
// numbers     -> original array
//
// 0 is the initial value of accumulator.

let sum = numbers.reduce(
    (accumulator, elem, idx, numbers) => {

        console.log(
            "Accumulator -> ",
            accumulator,
            "Element -> ",
            elem
        );

        // Add current element to accumulator.
        return accumulator + elem;

    },
    0
);


// Final result.
console.log(sum);

// Output:
// 150