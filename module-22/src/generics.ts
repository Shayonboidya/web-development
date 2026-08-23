// ============================================================
// TypeScript Generics
// ============================================================


// ============================================================
// 1. GENERICS WITH INTERFACE
// ============================================================

// `T` is a generic type parameter.
//
// The Response interface can work with any data type.
//
// T can be:
// string
// number
// boolean
// object
// array
// etc.

interface Response<T> {
    data: T;
    status: number;
}


// ------------------------------------------------------------
// Response with string data
// ------------------------------------------------------------

// Here T becomes `string`.

const transacting: Response<string> = {
    data: "Successfully.....",
    status: 200
};


// ------------------------------------------------------------
// Response with boolean data
// ------------------------------------------------------------

// Here T becomes `boolean`.

const transactingStatus: Response<boolean> = {
    data: false,
    status: 4555
};


// ============================================================
// 2. GENERICS WITH FUNCTION
// ============================================================

// `T` represents the type of the input value.
//
// The function returns the same type that it receives.
//
// If T is string:
// string -> string
//
// If T is number:
// number -> number

function identity<T>(value: T): T {
    return value;
}


// T becomes string.

const re1 = identity<string>("Hello");


// T becomes number.

const re2 = identity<number>(200);


// ============================================================
// 3. TYPE INFERENCE WITH GENERICS
// ============================================================

// You do not always need to explicitly provide <string>.
//
// TypeScript can infer T from the argument.

const re3 = identity("Shayon");
// T is inferred as string

const re4 = identity(500);
// T is inferred as number

const re5 = identity(true);
// T is inferred as boolean


// ============================================================
// 4. GENERICS WITH ARRAY
// ============================================================

// This function accepts an array of T
// and returns the first element.
//
// T[] means an array containing values of type T.

function getFirst<T>(items: T[]): T {
    return items[0];
}


// T becomes number.

const firstNumber = getFirst<number>([10, 20, 40]);


// T becomes string.

const firstName = getFirst<string>(["shayon", "nitu"]);


// TypeScript can also infer T automatically.

const firstBoolean = getFirst([true, false, true]);
// T is inferred as boolean