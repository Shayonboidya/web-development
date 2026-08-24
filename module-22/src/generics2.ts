// ============================================================
// TypeScript Generics + Tuple + Function Type
// ============================================================


// ============================================================
// 1. GENERIC useState FUNCTION
// ============================================================

// `T` is a generic type parameter.
//
// Whatever type is passed as `initialValue`,
// the same type will be used for:
// 1. The stored value
// 2. The setter function parameter
//
// The return type is a tuple:
//
// [T, (value: T) => void]
//
// First element:
//     T
//
// Second element:
//     A function that accepts T and returns void.

function useState<T>(
    initialValue: T
): [T, (value: T) => void] {

    // Store the current value.
    let value = initialValue;


    // This function updates the current value.
    //
    // `newValue` must have the same type as T.

    function setValue(newValue: T): void {
        value = newValue;
    }


    // Return a tuple containing:
    // 1. Current value
    // 2. Setter function

    return [value, setValue];
}


// ============================================================
// 2. useState WITH STRING
// ============================================================

// Here T becomes `string`.

const [name, setName] = useState<string>("name");


// `name` is string.
// `setName` accepts only string.

setName("Shayon"); // ✅


// setName(100); // ❌ number is not allowed


// ============================================================
// 3. USER INTERFACE
// ============================================================

// Define the structure of a User object.

interface User {
    email: string;
    isLogined: boolean;
}


// ============================================================
// 4. useState WITH OBJECT
// ============================================================

// Here T becomes `User`.
//
// Therefore:
// value    -> User
// setValue -> accepts User

const [user, setUser] = useState<User>({
    email: "shskm@",
    isLogined: true
});


// Valid User object.

setUser({
    email: "new@example.com",
    isLogined: false
});


// Invalid because the structure does not match User.
//
// setUser({
//     email: "hello@example.com"
// }); // ❌ isLogined is missing


// ============================================================
// 5. useState WITH UNION TYPE
// ============================================================

// Here T becomes:
//
// User | null
//
// This means the value can be:
// 1. A User object
// 2. null

const [currentUser, setCurrentUser] =
    useState<User | null>(null);


// `null` is valid because T allows null.


// A User object is also valid.

setCurrentUser({
    email: "user@example.com",
    isLogined: true
});


// `null` is also valid.

setCurrentUser(null);