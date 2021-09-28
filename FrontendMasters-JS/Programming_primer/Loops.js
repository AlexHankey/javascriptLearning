var students = ["Alex", "Declan", "Dan"];

for (let i = 0; i < students.length; i++) {
    greetStudent( students[i]);
}

for (let student of students) {
    greetStudent(student); 
}

while (students.length > 0) {
    let student = students.shift();
    console.log(`Hello, ${student}!`);
}