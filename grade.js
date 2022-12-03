const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

input.question("Enter students marks:",
function (mark){
    let marks=parseInt(mark, 10);


// A>79
//B>60 to 79
//C>59 to 49
//D>40 to 49
//E>less 40
        if (marks < 40){
            process.stdout.write("E\n");
        }else if (marks > 40){
            process.stdout.write("D\n");
        }else if (marks > 49){
            process.stdout.write("C\n");
        }else if (marks >= 60){
            process.stdout.write("B\n");
        }else if (marks > 79){
            process.stdout.write("A\n");
        }else {
            process.stdout.write("Error\n");
        }

    input.close();
});

