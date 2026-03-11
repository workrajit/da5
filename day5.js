const students = [
 { name: "Aman", marks: 85, subject: "Math" },
 { name: "Riya", marks: 42, subject: "Science" },
 { name: "Kabir", marks: 67, subject: "Math" },
 { name: "Sneha", marks: 91, subject: "English" },
 { name: "Arjun", marks: 38, subject: "Science" },
 { name: "Meera", marks: 74, subject: "Math" },
 { name: "Rohan", marks: 59, subject: "English" },
 { name: "Diya", marks: 88, subject: "Science" },
 { name: "Kunal", marks: 46, subject: "Math" },
 { name: "Isha", marks: 95, subject: "English" }
];

// Count pass students
const passCount = students.filter(student => student.marks >= 50).length;

// Count fail students
const failCount = students.filter(student => student.marks < 50).length;

// Result object
const result = {
  pass: passCount,
  fail: failCount
};

console.log(result);
