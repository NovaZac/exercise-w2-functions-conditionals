/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/
  /*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */

const theCoders = (driver, navigator) => {
    console.log(
      `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
    );
  };
  theCoders("Jennie", "Alfons");

 
  /*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */
  
  function compareStringLengths(driver, navigator) {
    if (driver.length > navigator.length) {
        console.log("The driver has the longest name");
    } else if (driver.length < navigator.length) {
        console.log("The navigator has the longest name");
    } else {
        console.log("The driver and the navigator has equally long names");
    }
}

compareStringLengths("Jennie", "Alfons")

  
 
  /*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */

  function getUserAge() {
    let userAge = prompt('How old are you?');

    // Omvandla input till ett nummer
    userAge = Number(userAge);

    // Kontrollera att det är ett giltigt nummer
    if (isNaN(userAge) || userAge <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    // Använd villkorssatser för att ge olika meddelanden beroende på ålder
    if (userAge < 18) {
        alert(`${userAge}! You're still so young, enjoy your youth!`);
    } else if (userAge >= 18 && userAge <= 30) {
        alert(`${userAge}! That's a great age, full of possibilities!`);
    } else if (userAge > 30 && userAge <= 50) {
        alert(`${userAge}! You're in your prime, keep going strong!`);
    } else if (userAge > 50 && userAge <= 70) {
        alert(`${userAge}! Wisdom comes with age, you've seen a lot!`);
    } else {
        alert(`${userAge}! Age is just a number, you're timeless!`);
    }
}

getUserAge()
  
  const calculationTest = () => {
    let calculatoinNumber = prompt("What is 3^2")

    calculatoinNumber= Number(calculatoinNumber)

    // Kontrollera att det är ett giltigt nummer
    if (isNaN(calculatoinNumber) || calculatoinNumber <= 0) {
      alert("Please enter a valid age.");
      return;
  }

    if (calculatoinNumber === 9){
      alert("Yeah! Correct")
    } else {
      alert("Nooo, 9 is the right answer")
    }
      
    /*
    5)
    In this function we want to give the user a mathematical calculation to 
    give us the answer to. Something like prompt('What is 5 + 6?')  
    If the answer is correct, congratulate the user. 'Yay! Correct'
    If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
    You choose if to use addition, subtraction, multiplication or division. 
    */
  }

  calculationTest()
  
  /*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */
  
  const calculationMachine = () => {
     // Generera två slumpmässiga tal mellan 1 och 10
     let num1 = Math.floor(Math.random() * 10) + 1;
     let num2 = Math.floor(Math.random() * 10) + 1;
 
     // Beräkna rätt svar
     let correctAnswer = num1 + num2;
 
     // Ställ frågan till användaren
     let userAnswer = prompt(`What is ${num1} + ${num2}?`);
 
     // Kontrollera om användarens svar är rätt
     if (Number(userAnswer) === correctAnswer) {
         alert("Correct! Well done!");
     } else {
         alert(`Incorrect. The correct answer was ${correctAnswer}.`);
     }
 }

 calculationMachine()
 
 
    
  