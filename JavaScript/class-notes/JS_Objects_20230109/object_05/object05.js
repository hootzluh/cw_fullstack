const workingHours = {
    monday : "09:00-17:00",
    tuesday : "10:00-17:00",
    wednesday : "11:00-16:00",
    thursday : "08:00-16:00",
    friday : "09:00-18:00",
    saturday : "10:00-14:00",
    sunday : "closed"
  };


// for(days in workingHours){
//     console.log(days, workingHours[days]);
// }

/*
  KEY     ->  VALUE         PAIR
  NAME    ->  VALUE         PAIR
  monday  :  "09:00-17:00"
  tuesday :  "10:00-17:00"
*/

const keys = Object.keys(workingHours);
//keys.forEach(day => {console.log(day, workingHours[day])});
console.log(keys);

const values = Object.values(workingHours);
console.log(values);

const entry = Object.entries(workingHours);
console.log(entry);



