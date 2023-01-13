const workingHours = {
    monday : "09:00-17:00",
    tuesday : "10:00-17:00",
    wednesday : "11:00-16:00",
    thursday : "08:00-16:00",
    friday : "09:00-18:00",
    saturday : "10:00-14:00",
    sunday : "closed"
  };

const theDay = prompt('Enter a day : ').toLowerCase();
alert(`On ${theDay} the store will be open between ${workingHours[theDay]}`);

// check if sunday

// check if the value is undifined
  