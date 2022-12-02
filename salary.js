input.question("What is your gross salary?\n",

function netSalaryCalculator(grossPay){
    let paye;
    let extra_taxable_pay;
    let nhif;
    let nssf= 200;
    let totalDeductions = nhif + paye + nssf;
    let net_salary = grossPay - total_deductions;
    if (gross_pay < 24001){
        paye = gross_pay * 0.1;
    }else if (gross_pay < 32334){
        paye = 2400;
        extra_taxable_pay = gross_pay - 24000
        paye = (extra_taxable_pay * 0.25) + paye;
    }else {
        paye = 4483;
        extra_taxable_pay = gross_pay - 32333;
        paye = (extra_taxable_pay * 0.30) + paye;
    }


    if (gross_pay < 6000){
        nhif = 150;
    }else if(gross_pay < 8000){
        nhif = 300;
    }else if(gross_pay < 12000){
        nhif = 400;
    }else if(gross_pay < 15000){
        nhif = 500;
    }else if(gross_pay < 20000){
        nhif = 600;
    }else if(gross_pay < 25000){
        nhif = 750;
    }else if(gross_pay < 30000){
        nhif = 850;
    }else if(gross_pay > 35000){
        nhif = 900;
    }else if(gross_pay < 40000){
        nhif = 950;
    }else if(gross_pay < 45000){
        nhif = 1000;
    }else if(gross_pay < 50000){
        nhif = 1100;
    }else if(gross_pay < 60000){
        nhif = 1200;
    }else if(gross_pay < 70000){
        nhif = 1300;
    }else if(gross_pay < 80000){
        nhif = 1400;
    }else if(gross_pay < 90000){
        nhif = 1500;
    } else {
        nhif = 1700;
    }

    process.stdout.write(`Your gross pay is Ksh: ${gross_pay}\n`);
    process.stdout.write(`Your P.A.Y.E is Ksh: ${paye}\n`);
    process.stdout.write(`Your NHIF deduction pay is Ksh: ${nhif}\n`);
    process.stdout.write(`Your standard NSSF deduction is Ksh: ${nssf}\n`);
    process.stdout.write(`Your Total deduction amount to Ksh: ${total_deductions}\n`);
    process.stdout.write(`Your Net Salary is Ksh: ${net_salary}\n`);
    input.close();


});