function greet() {
    var name = document.getElementById("nameInput").value;
    var greetingMessage = "Hello, " + name + "! Have a great day!";
    console.log(greetingMessage);
    document.getElementById("greetingMessage").textContent = greetingMessage;
}

var calculate = function(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error: Division by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }
    document.getElementById("result").textContent = "Result: " + result;
    console.log(result);


    }

    // Function to check if a number is even
function isEven(number2) {
    return number2 % 2 === 0;
}

// Function to handle button click event
function checkEven() {
    var number2 = parseInt(document.getElementById("numberInput").value);
    var result2 = isEven(number2);
    document.getElementById("result2").textContent = result2 ? "The number is even." : "The number is odd.";
    console.log(result2);
}

function grades(score) {
    if (score >= 100) {
        return 'out of this World, Amazing!';
    }
       else if (score >= 90) {
        return ': A';
    } else if (score >= 80) {
        return ': B';
    } else if (score >= 70) {
        return ': C';
    } else if (score >= 60) {
        return ': D';
    } else {
        return ': F';
    }
}

// Function to handle button click event
function calculateGrade() {
    var score = parseInt(document.getElementById("scoreInput").value);
    var grade = grades(score);
    document.getElementById("gradeResult").textContent = "The student's grade is " + grade;
    console.log(grade)
}

