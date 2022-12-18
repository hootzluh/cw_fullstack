// Assignment 01


    var num = prompt("Enter a number:");
    while (num !== NaN ) {
        num = prompt("Please enter a valid number: ");
    }

    if (isNaN(num)) {
        alert(`Good job! ${num} is a number!`);
    }