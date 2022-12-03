const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

input.question("What is your Gross Salary?:",
function (grossPay){
    let paye;
    let extra_taxable_pay;
    let nhif;
    let nssf= 200;
    let totalDeductions = nhif + paye + nssf;
    let netSalary = grossPay - totalDeductions;
    if (grossPay < 24001){
        paye = grossPay * 0.1;
    }else if (grossPay < 32334){
        paye = 2400;
        extraTaxablePay = grossPay - 24000
        paye = (extraTaxablePay * 0.25) + paye;
    }else {
        paye = 4483;
        extraTaxablePay = grossPay - 32333;
        paye = (extraTaxablePay * 0.30) + paye;
    }


    if (grossPay < 6000){
        nhif = 150;
    }else if(grossPay < 8000){
        nhif = 300;
    }else if(grossPay < 12000){
        nhif = 400;
    }else if(grossPay < 15000){
        nhif = 500;
    }else if(grossPay < 20000){
        nhif = 600;
    }else if(grossPay < 25000){
        nhif = 750;
    }else if(grossPay < 30000){
        nhif = 850;
    }else if(grossPay > 35000){
        nhif = 900;
    }else if(grossPay < 40000){
        nhif = 950;
    }else if(grossPay < 45000){
        nhif = 1000;
    }else if(grossPay < 50000){
        nhif = 1100;
    }else if(grossPay < 60000){
        nhif = 1200;
    }else if(grossPay < 70000){
        nhif = 1300;
    }else if(grossPay < 80000){
        nhif = 1400;
    }else if(grossPay < 90000){
        nhif = 1500;
    } else {
        nhif = 1700;
    }

    process.stdout.write(`Your gross pay is Ksh: ${grossPay}\n`);
    process.stdout.write(`Your P.A.Y.E is Ksh: ${paye}\n`);
    process.stdout.write(`Your NHIF deduction pay is Ksh: ${nhif}\n`);
    process.stdout.write(`Your standard NSSF deduction is Ksh: ${nssf}\n`);
    process.stdout.write(`Your Total deduction amount to Ksh: ${totalDeductions}\n`);
    process.stdout.write(`Your Net Salary is Ksh: ${netSalary}\n`);
    input.close();


});