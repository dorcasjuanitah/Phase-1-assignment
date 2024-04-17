//- A > 79
//- B - 60 to 79
//- C - 59 to 49
//- D - 40 to 49
//- E - less than 40.

//user input 
function calculateGrade(marks)
{
    if(marks>79 && marks<=100)
    {
        return `A`;
    }
    else if (marks>=60 && marks<=79)
    {
        return `B`;
    }

    else if (marks>49 && marks<=59)
{
    return `C`;

}
else if (marks>=40 && marks<=49)
{
    return `D`;

}
else
{
    return `E`;
}
}
function main() {
    const readline = require('readline').createInterface(
        {
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Enter the student's mark: ",
     (marks) => { marks = parseInt(marks);
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            const grade = calculateGrade(marks);
            
            console.log(`The student's grade is: ${grade}`);
        } 
        else 
        {
            console.log("Please enter a number:");
            main();
            return;
        }
        readline.close();
    });
}


main();

// below 70 you are ok
// case 1 you are 75
// 75-70 = 5
// 5/5 =1

//case 80
//80-70 =10
//10/5 =2

//speed detector code 
function calculatedemeritPoint(speed){
    const speedLimit=70;
    const penalty=5;
    const demeritPoints=Math.floor((speed-speedLimit)/penalty);//checks if the points exceeds 12 points 
//if the speedlimit is below 70 its will output "ok"
        if(speed<70)
        {
            return Ok;
        }
         //if the points exceeds 12 license is suspended
      else if(demeritPoints>12)
        {
            return LicenseSuspended;
        }
    else
    {
        return demeritPoints;
    }
}

    //readline allow user to input and get output
function main() {
    const readline=require('readline').createInterface(
     {
        input: process.stdin,
        output: process.stdout
     });
    readline.question("Enter the speed :", (speed) => {speed =parseInt(speed);
        if (!isNaN(speed) && speed >= 0) {
            const points = calculatedemeritPoint(speed);
            console.log(`The demeritpoints is: ${points}`);

        } 
        else 
        {
            console.log("Please a number:");
            main();
            return;
        }
        readline.close();
    });
}
main()

const payeRates = {
    0: 10,
    24000: 25,
    32333.33: 30,
    499999.99: 32.5,
};

function getTaxRate(salary) {
    for (const [max, deduction] of Object.entries(payeRates)) {
        if (salary <= parseFloat(max)) {
            return deduction;
        }
    }
    return 35; // Default deduction
}

function salaryAfterPaye(salary) {
    const rate = getTaxRate(salary) / 100;
    const tax = salary * rate;
    return salary - tax;
}

function nhifDeductable(income) {
    if (income <= 6000) {
        return 150;
    } else if (income <= 7999) {
        return 300;
    } else if (income <= 11999) {
        return 400;
    } else if (income <= 14999) {
        return 500;
    } else if (income <= 19999) {
        return 600;
    } else if (income <= 24999) {
        return 750;
    } else if (income <= 29999) {
        return 850;
    } else if (income <= 34999) {
        return 900;
    } else if (income <= 39999) {
        return 950;
    } else if (income <= 44999) {
        return 1000;
    } else if (income <= 49999) {
        return 1100;
    } else if (income <= 59999) {
        return 1200;
    } else if (income <= 69999) {
        return 1300;
    } else if (income <= 79999) {
        return 1400;
    } else if (income <= 89999) {
        return 1500;
    } else if (income <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

function NetSalary(benefits, basicSalary) {
    const afterPay = salaryAfterPaye(benefits + basicSalary);
    const nhif = nhifDeductable(benefits + basicSalary);
    return afterPay - nhif;
}

function main() {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter your basic salary: ", (basicSalary) => {
        rl.question("Enter benefits: ", (benefits) => {
            if (isNaN(basicSalary) || isNaN(benefits)) {
                console.log("Please enter valid numbers.");
            } else {
                const netSalary = NetSalary(parseFloat(benefits), parseFloat(basicSalary));
                console.log('Net salary:', netSalary);
            }
            rl.close();
        });
    });
}

main();

