// Q1:Create a function that will be able to convert figures from Fahrenheit to Celsius.

    
function farToCel(temperature) // Function to convert Fahrenheit to Celsius
 {
    var celsius = (temperature - 32) * 5 / 9;
    return celsius; // Convert Fahrenheit to Celsius using the formula: (°F - 32) * 5/9
  }
  
  // Test cases
  console.log(farToCel(600));  // Expected output: 315.55555555555554
  console.log(farToCel(32));   // Expected output: 0
  console.log(farToCel(-40));  // Expected output: -40

  //Q2:Create a function that will calculate the average of numbers in an array

    function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; // Return 0 if the array is empty to avoid error caused by division by zero
    }
  
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]; //A loop has been set to count each number in the array and sum the values together
    }
  
    var average = sum / numbers.length;
    return average; // To calculate and display the average
  }
  
  // Test cases
  console.log(calculateAverage([1, 2, 6, 4, 5]));  // Expected output: 3.6
  console.log(calculateAverage([10, 20, 30, 40, 50]));  // Expected output: 30
  console.log(calculateAverage([-1, 0, 1]));  // Expected output: 0
  console.log(calculateAverage([0]));  // Expected output: 0 (empty array)

  //Q3:Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive,non-zero digits.

   function divisibleBy(n,x,y) {
        if (n % x ===0 && n % y ===0){
        return true;} //if there is no remainder, return true
        else {
        return false;
             } //return false if the remainder is anything but zero

     }
     console.log(divisibleBy(12,5,6)); //Expecting false ,since 12 is not divisible by 5
     console.log(divisibleBy(18,2,6)); //Expecting true ,since 12 is divisible by 2 and 6
      

    //Q4:Create a function that will output the first 100 prime numbers.

        function Prime(count){
             
                var primes = [ ]; // to contain array of prime numbers
                var num = 2; //inital prime number
              
                while (primes.length < count) {
                  if (isPrime(num)) {
                    primes.push(num);
                  }//loop for counting number of prime numbers,also to collect found prime numbers

                  num++; //increment number
                }
              
                return primes;
              }
              
              function isPrime(num) {
                if (num < 2) {
                  return false; //There are no prime numbers less than 2
                }
              
                for (var i = 2; i <= Math.sqrt(num); i++) {
                  if (num % i === 0) {
                    return false; //Prime numbers are not divisible
                  }
                }
              
                return true;//Everything else are prime numbers
              }
              
              
              var primeNumbers = Prime(100);
              console.log(primeNumbers); // Generate and output the first 100 prime numbers
              //ANSWER:[(100) [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541]]
              
        
  //Q5:Create a function that will return a boolean specifying if a number is a prime number

  function isPrime(number) {
    if (number<2) {
      return false;
    }
  
    // Check divisibility up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;}
  console.log(isPrime(100)) //ANSWER:FALSE
  console.log(isPrime(7)) //ANSWER:TRUE
  

    //Q6:Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

    function PositiveNumbers(numbers) {
      let positiveNumbers = [];
    
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
          positiveNumbers.push(numbers[i]);
        }
      }
    
      return positiveNumbers;
    }
    let numbers = [5, -2, 10, -8, 3, 0, 7, -1,10,49,-47];
    let positiveArray = PositiveNumbers(numbers);
    console.log(positiveArray);  // Output: [5, 10, 3, 7,10,49]


    //Q7:Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number
    // and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz"

    for (let num = 1; num <= 100; num++) {
      if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
      } else if (num % 3 === 0) {
        console.log("Fizz");
      } else if (num % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(num);
      }
    }
//ANSWER:1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29
// FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz
 //58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 
 //Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz


 //Q8:The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, 
//  our hashtag generator will meet the following criteria: 
// It must start with a hash symbol, #.
// Ignore all spaces in the input.
// All words must have their first letter capitalized.
// If the final result is going to be longer than 140 characters, it should return false.
// If the input or result is an empty string, it should return false.



 function Hashtag(input) {
  // Remove spaces and split input into an array of words
  const words = input.trim().split(" ");

  // Check if input is empty or result will exceed 140 characters
  if (input === "" || words.length === 0 || input.length > 140) {
    return false;
  }

  // Capitalize the first letter of each word and join them with no spaces
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const hashtag = "#" + capitalizedWords.join("");

  return hashtag;
}
console.log(Hashtag("hello world")); // Output: #HelloWorld
console.log(Hashtag("    openAI    is    awesome   ")); // Output: #OpenAIIsAwesome
console.log(Hashtag("")); // Output: false
console.log(Hashtag("upskill".repeat(141))); // Output: false (exceeds 140 characters)





    

  