// ================================
// Function with Default Parameter
// ================================

// Create a function named 'coffea_shope'.
//
// 'sugger = 1' means:
// If no value is passed while calling the function,
// JavaScript automatically uses 1 as the default value.
function coffea_shope(sugger = 1) {

    // Print the amount of sugar.
    console.log(`sugger ${sugger} spiun`);
}


// ================================
// Function Calls
// ================================

// Pass 0 as an argument.
//
// Since a value is provided (even though it is 0),
// JavaScript does NOT use the default value.
coffea_shope(0);

// Output:
// sugger 0 spiun


// Call the function without any argument.
//
// Because no value is passed,
// JavaScript uses the default value (1).
coffea_shope();

// Output:
// sugger 1 spiun


// Pass 8 as an argument.
coffea_shope(8);

// Output:
// sugger 8 spiun


// Pass 18 as an argument.
coffea_shope(18);

// Output:
// sugger 18 spiun