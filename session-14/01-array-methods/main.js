console.log('Array methods recap');

const students = [
    {
        name: 'Ion',
        location: 'CJ',
        grades: [7.01, 5.83]
    },
    {
        name: 'Ana',
        location: 'BV',
        grades: [9.01, 5.21, 7.88]
    },
    {
        name: 'Teo',
        location: 'CV',
        grades: []
    }
];

// 
// const newStudents = [];
// students.forEach(s => newStudents.push(s.name));


const newStudents =  students.map(s => s.name);
// const newStudents =  students.map(function(s){
//     return s.name
// });


// function createNewStudent(s){
//     return s.name;
// }

// const newStudents = [];
// for (let i = 0; i < students.length; i++) {
//     newStudents.push(createNewStudent(students[i]))
// }

console.log(newStudents);