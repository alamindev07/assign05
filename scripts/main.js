


const section1 = document.getElementById("taskNumber");
const section2 = document.getElementById("checkNumber");
const button = document.querySelectorAll(".completeBtnOne");

// Add a click event listener to the button
button.addEventListener("click", function () {
    this.disabled = true;
    let num1 = parseInt(section1.textContent);
    let num2 = parseInt(section2.textContent);
  
    // Update values only if conditions are met
    if (num1 > 0) {
      num1 -= 1; 
      section1.textContent = num1;

      if(num1===0){
        alert("all button clicked");
      }
  
      if (num2 < 29) {
        num2 += 1; 
        section2.textContent = num2;
      }
    }
  
 
});