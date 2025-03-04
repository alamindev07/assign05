



const section1 = document.getElementById("taskNumber");
const section2 = document.getElementById("checkNumber");
const buttons = document.querySelectorAll(".buttonOne");

        buttons.forEach(button =>{
          button.addEventListener("click", function () {
            this.disabled = true;
            alert("button clicked")
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
        });


       
      // get the local time
       
        let convertedTime = "";
        

function updateTime() {
  const now = new Date();
  convertedTime = now.toLocaleString('en-US', {
    weekday: 'long', 
    year: 'numeric',
    month: 'long',    
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true      // 12-hour format with AM/PM
    
  });
  
};

updateTime();


// function for get the heading value 

function getHeadingValue(event) {
  const cart = event.target.closest(".cart");
  return cart ? cart.querySelector(".btnheading").textContent : "";
}



// Select all buttons
const buttonss = document.querySelectorAll(".buttonOne");

const setHistory = document.getElementById("setHistory");

buttonss.forEach(button => {
  button.addEventListener("click", function (event) {
    
    const headingValue = getHeadingValue(event); // Get the heading

// set history section
    const clickedTime = convertedTime;
    const p = document.createElement("p");
    p.innerHTML = `
    <div class="new-section">
    <h2 class="font-bold">${headingValue}</h2>
    <p>clicked time: ${clickedTime}</p>
    
  </div>
    `;
    setHistory.appendChild(p);
    p.classList.add("bg-gray-100", "p-4", "rounded-lg", "mt-2")
    const newSection = document.querySelector(".new-section");
newSection.classList.add("bg-gray-100", "p-4", "rounded-lg");

  });
});



// clear history section 

document.getElementById('clearHistory').addEventListener('click', function() {
  const historyList = document.getElementById('setHistory');
  historyList.innerHTML = ''; // Clears all items inside the <ul> element
});


















