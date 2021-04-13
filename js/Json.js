var student = {
    name: "Rahim",
    age: 26,
    hometown: "Dhaka"
};

var student_json = JSON.stringify(student);

console.log(student_json);

var student_new = JSON.parse(student_json);
console.log(student_new);