// random color button
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.getElementById("changeColorBtn").addEventListener("click", function () {
    
    document.body.style.backgroundColor = getRandomColor();
});

// another html file add
document.getElementById("goToAnotherPage").addEventListener("click", function () {
    window.location.href = "another.html"; 
});

// set the todays date into a section
const setCurrentDate = document.getElementById("setCurrentDate");
function updateTime() {
    const now = new Date();
    convertedDate = now.toLocaleString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long', 
      year: 'numeric',
      
    });
    
  };
  
  updateTime();
setCurrentDate.textContent = convertedDate;

