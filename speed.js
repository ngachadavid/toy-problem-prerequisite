const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

input.question("Speed of the car: ",
function (speed){
    let speedOfCar = parseInt(speed, 10);
    if (speedOfCar < 70) {
        process.stdout.write("Ok\n");
    }
    else{
        const demeritPoints = ((speedOfCar - 70) / 5);
        Math.ceil(demeritPoints);
        process.stdout.write(`points: ${demeritPoints}\n!`);
        if (demeritPoints >= 12) {
            process.std.out.write(`License suspended.\n`)
        } else {
            process.exit(0);
        }
    }
    input.close();
});
