function calculateTaxes(income) {
    if (income > 30000) {
      return income * 0.25;
    } else {
      return income * 0.15;
    }
  }
  
console.log(calculateTaxes(500))

// ----------------------------------------------------------------------------------------------------------------

//    TEST CLEAN-UP EXAMPLE

// --------------------------------------------------------------

let names=[];
let nameInput=document.getElementById('username')
  
function submitForm(){
      names.push(nameInput.value)
}