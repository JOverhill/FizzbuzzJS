/**
 * @param {number} n
 * @return {string[]}
 */
/* This method saves everything in a single array. Alternative method / if user wants to print each index of fizzbuzz on separate line would be to replace each results.push with console.log*/
 function fizzBuzz(n) {
    var n = prompt("Give num");
    
    var results = [];
    
    for (i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0)
            results.push("FizzBuzz");
        else if (i % 3 == 0)
            results.push("Fizz");
         else if (i % 5 == 0)
            results.push("Buzz");
        else
            results.push(i.toString()); // Without toString() i would be saved as integer. We want every index as string. 
    }
    console.log(results)
};