//What are the differences btw the rgular Function and an Arrow Function?

//Difference No.1: We can omit the return statement and curly braces from the funciton when the function is a one liner.


/*

function multiplyNumbers(x, y)
{
    return x * y;
}

console.log(multiplyNumbers(2,5));

*/


const multiplyNumbers = (x, y) => x * y;

console.log(multiplyNumbers(5,5));
