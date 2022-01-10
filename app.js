let billAmount = document.querySelector('#bill-amount');
let nextButton = document.querySelector('.next-button');
let cashGiven = document.querySelector('#cash-given');
let checkButton = document.querySelector('.check-button');
let errorMessage = document.querySelector('.error-message');
let noOfNotes = document.getElementsByClassName('no-of-notes');

const currentNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

// Unhide the input field
nextButton.addEventListener('click', () => {
  let unhide = document.querySelector('.unhide-div');
  if (unhide.style.display === 'none' && billAmount.value > 0) {
    unhide.style.display = 'block';
  } else {
    unhide.style.display = 'none';
  }
});

// event listenr on check button
var validateBillAndCashAmount = () => {
  hideMessage();
  if (billAmount.value > 0) {

  if (billAmount.value <= cashGiven) {
    // 20 < 200 true
    const amountToBeReturned = cashGiven.value - billAmount.value;
    calculateChange(amountToBeReturned);
  } 
 else{
  showMessage("You Need To Pay Full Cash");
  }
} else {
  showMessage("Invalid Bill Amount");
}
}

checkButton.addEventListener("click", validateBillAndCashAmount);

var hideMessage = () => errorMessage.style.display = "none";

var showMessage = (msg) => {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
}

var calculateChange = (amountToBeReturned)  => {
  
  for (let i = 0; i < currentNotes.length; i++) {
    
    const numberOfNotes = Math.trunc(amountToBeReturned / currentNotes[i]);
  
    amountToBeReturned = amountToBeReturned % currentNotes[i];
 
    noOfNotes[i].innerText = numberOfNotes;
  }
}
