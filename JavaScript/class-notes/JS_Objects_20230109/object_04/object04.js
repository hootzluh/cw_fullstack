const person = {
    name : 'Jhon',
    YOB : 1977,

    calcAge : function(year) {
        // YOB = 'in the Function';
        // console.log(YOB);
        // console.log(this.YOB);
        return year - person.YOB;
    },

    calcAgeArrow : (year) => year - person.YOB
}


console.log(person.calcAge(2022));
console.log(person.calcAgeArrow(2022));



