const student = {
    name: 'Ervin Howell',
    scores: {
      math: [85, 74, 55, 95, 75, 65],
      science: [77, 88],
    },
  };

// console.log(student.scores.math[3]);

let theMathScores = student.scores.math;

console.log(theMathScores[theMathScores.length - 1])


// console.log(student.scores.math);
// console.log(student.scores.math.length - 1);
// console.log(student.scores.math[student.scores.math.length - 1]);

// console.log(student.scores.math.slice(-1));
// console.log(student.scores.math.slice(-1)[0]);

let array = [1,2,3,4];

