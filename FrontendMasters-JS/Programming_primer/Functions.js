var students = ["Alex", "Declan", "Dan"];

function greetStudent(student) {
    console.log(
        `Hello, ${student.name}!`
    );
}


function timeRemaining(timeElapsed, endTime) {
    return (endTime - timeElapsed) / 2;
}
var left = timeRemaining(42,140);

console.log(left);