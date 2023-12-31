const readline = require('readline');

const reader = readline.createInterface({
    // it's okay if this part is magic; it just says that we want to
    // 1. output the prompt to the standard output (console)
    // 2. read input from the standard input (again, console)


    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){

    if (numsLeft > 0) {
        reader.question("Enter a Number: ", function (answer) {
        // const somethingelse = parseInt(answer);
        // sum += somethingelse;
        sum += parseInt(answer);
        console.log(sum);
        return addNumbers(sum, numsLeft - 1, completionCallback)
    });

    } else {
        reader.close();
        return completionCallback(sum)
    }
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));