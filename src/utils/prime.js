// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false; // Skip even numbers

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to find the nth prime number
 export function findNthPrime(n) {
  console.log("Prime number calculated again");
  if (n < 1) return null; // Edge case: n must be at least 1

  let count = 0;
  let num = 1;

  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }

  return num;
}
