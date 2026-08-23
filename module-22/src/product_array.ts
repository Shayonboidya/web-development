// ============================================================
// TypeScript: Type Alias + Array of Objects
// ============================================================


// ============================================================
// 1. CREATE A TYPE ALIAS
// ============================================================

// `Product` defines the structure of a product object.
//
// Every Product must have:
// name     -> string
// brand    -> string
// price    -> number
// quantity -> number

type Product = {
    name: string;
    brand: string;
    price: number;
    quantity: number;
};


// ============================================================
// 2. CREATE AN ARRAY OF PRODUCTS
// ============================================================

// `Product[]` means:
// "This is an array, and every element must follow
// the Product type."

const products: Product[] = [
    {
        name: "headphone",
        brand: "QW",
        price: 230,
        quantity: 200
    },
    {
        name: "laptop",
        brand: "HP",
        price: 560000,
        quantity: 3
    }
];