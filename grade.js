function handleClick(event){
    const marks=parseInt(document.getElementById("marks").value)
    let grade = studentsGrades(marks);
    document.getElementById("out").textContent=grade
}

// A>79
//B>60 to 79
//C>59 to 49
//D>40 to 49
//E>less 40
function  studentsGrades(marks){
    console.log(grade)
        if (marks < 40){
            return "E";
        }else if (marks > 40){
            return "D";
        }else if (marks > 49){
            return "C";
        }else if (marks >= 60){
            return "B";
        }else if (marks > 79){
            return "A";
        }else {
            return "Error"
        }
    }

