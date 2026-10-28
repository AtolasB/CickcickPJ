let count = 0;
const btnC = document.getElementById("btnClick");
const displayNum = document.getElementById("number");

document.addEventListener('DOMContentLoaded', () => {
  const displayLaoding =document.getElementById("laodingWeb");
  
  setTimeout(() => {
    displayLaoding.style.display = "none"
  }, 1500);
});


moveButton();

function moveButton() {
  const minY = displayNum.getBoundingClientRect().bottom;
  const maxX = window.innerWidth - btnC.offsetWidth;
  const maxY = window.innerHeight - btnC.offsetHeight;
  const x = Math.random() * maxX;
  const y = minY + Math.random() * (maxY - minY);
  
  btnC.style.left = x + "px";
  btnC.style.top = y + "px";
};

btnC.addEventListener("click", function() {
  count = count + 1;
  displayNum.textContent = count;
 
  btnC.style.display = "none";

  setTimeout(function() {
    btnC.style.display = "block";
    moveButton();
  }, 500);
});

