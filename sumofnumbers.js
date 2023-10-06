function calculateSum(n) {
    // Initialize a variable to store the sum 
    let sum = 0;

    // Use a for loop to iterate from 1 to n and calculate the sum
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Return the calculated sum 
    return sum;
}

// Teste the function with different values of n
console.log(calculateSum(5)); // Should print 15 (1 + 2 + 3 + 4 + 5)
console.log(calculateSum(10)); // Should print 55 (1 + 2 + 3 + ... + 10)
