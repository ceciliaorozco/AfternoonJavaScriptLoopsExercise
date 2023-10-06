function printEvenNumbers (n) {
    // Initialize a variable to start from 2 (the first even number)
    let i = 2;

    // Use a while loop to iterate and print even numbers while
    while (i <= n) {
        console.log(i);
        i += 2; // Increment by 2 to get the next even number
    } 
}

// Teste the function with different values of n
console.log("Even numbers up to 10:");
printEvenNumbers(10); // Should print 2, 4, 6, 8, 10
console.log("Even numbers up to 20:");
printEvenNumbers(20); // Should print 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
