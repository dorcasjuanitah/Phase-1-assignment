let mark = document.querySelector("#mark").value;
function grading(mark){
    if (mark >= 79 && mark === 100){
        grade = "A";
    }
    else if(mark >=60 && mark < 80){
        grade = "B";
    }
    else if(mark >=50 && mark <60){
        grade = "C"
    }
    else{
        grade = "D";
    }
}
