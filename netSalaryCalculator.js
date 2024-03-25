let netSalary;
let grossSalary;
let payee;
let benefits;
let NHIFDeductions;
let NSSFDeductions;

function calNetSalary(){
    netSalary = ((grossSalary - calPayee(grossSalary)- calNHIFDeductions(grossSalary) - calNSSFDeductions(grossSalary)) + benefits);
    return netSalary;

 function calNHIFDeductions(grossSalary){
    if (grossSalary < 6000){
        NHIFDeductions = 150;
        return NHIFDeductions; 
    }
    else if(grossSalary >=6000 & grossSalary < 8000){
         NHIFDeductions = 300;
         return NHIFDeductions;
    }
    else if(grossSalary >=8000 & grossSalary < 12000){
        NHIFDeductions = 400;
        return NHIFDeductions;
   }
   else if(grossSalary >=12000 & grossSalary < 15000){
    NHIFDeductions = 500;
    return NHIFDeductions;
   }
   else if(grossSalary >=15000 & grossSalary < 20000){
    NHIFDeductions = 600;
    return NHIFDeductions;
   }
   else if(grossSalary >=20000 & grossSalary < 25000){
    NHIFDeductions = 750;
    return NHIFDeductions;
   }
   else if(grossSalary >=25000 & grossSalary < 30000){
    NHIFDeductions = 850;
    return NHIFDeductions;
   }
   else if(grossSalary >=30000 & grossSalary < 35000){
    NHIFDeductions = 900;
    return NHIFDeductions;
   }
   else if(grossSalary >=35000 & grossSalary < 40000){
    NHIFDeductions = 950;
    return NHIFDeductions;
   }
   else if(grossSalary >=40000 & grossSalary < 45000){
    NHIFDeductions = 1000;
    return NHIFDeductions;
   }
   else if(grossSalary >=45000 & grossSalary < 50000){
    NHIFDeductions = 1100;
    return NHIFDeductions;
   }
   else if(grossSalary >=50000 & grossSalary < 60000){
    NHIFDeductions = 12000;
    return NHIFDeductions;
   }
   else if(grossSalary >=60000 & grossSalary < 70000){
    NHIFDeductions = 1300;
    return NHIFDeductions;
   }
   else if(grossSalary >=70000 & grossSalary < 80000){
    NHIFDeductions = 1400;
    return NHIFDeductions;
   }
   else if(grossSalary >=80000 & grossSalary < 90000){
    NHIFDeductions = 1500;
    return NHIFDeductions;
   }
   else if(grossSalary >=90000 & grossSalary < 100000){
    NHIFDeductions = 16000;
    return NHIFDeductions;
   }
   else {
    NHIFDeductions = 1700;
    return NHIFDeductions;
   };
   //return (calNHIFDeductions(grossSalary));
 }
 //return (calNHIFDeductions(grossSalary));
   // console.log(calNHIFDeductions(grossSalary));

   function calNSSFDeductions(grossSalary){

    NSSFDeductions = (grossSalary * 0.006);
    return NSSFDeductions;
   }
   // console.log(calNSSFDeductions);

 function calPayee(grossSalary){
    if (grossSalary <= 24000){
        payee = (grossSalary * 0.1);
        return payee;
    }
    else if (grossSalary > 24000 && grossSalary < 32334){
        payee = (grossSalary * 0.25);
        return payee;
    }
    else if (grossSalary > 32334 && grossSalary < 500000){
        payee = (grossSalary * 0.3);
        return payee;
    }
    else if (grossSalary > 500001 && grossSalary < 800001){
        payee = (grossSalary * 0.325);
        return payee;
    }
    else{
        payee = (grossSalary * 0.35);
        return payee;
    } 
 }

}
console.log (calNetSalary());
