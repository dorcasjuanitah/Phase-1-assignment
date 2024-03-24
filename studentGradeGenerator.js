let mark = document.querySelector("#mark").value;
function grading(mark){
    if (mark >= 79 && mark === 100){
        grade = "A";
        return grade;
    }
    else if(mark >=60 && mark < 80){
        grade = "B";
        return grade;
    }
    else if(mark >=50 && mark <60){
        grade = "C";
        return grade;
    }
    else{
        grade = "D";
        return grade;
    }
}
console.log (grading(mark));