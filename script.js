let count = 0;
const btnC = document.getElementById("btnClick");
const displayNum = document.getElementById("number");

function moveButton() {
  const maxX = window.innerWidth - btnC.offsetWidth;
  const maxY = window.innerHeight - btnC.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btnC.style.left = x + "px";
  btnC.style.top = y + "px";
};

btnC.addEventListener("click", function() {
  count = count + 1;
  displayNum.textContent = count;
 
  btnC.style.display = "none";

  setTimeout(function() {
    btnC.style.display = "block"
    moveButton();
  }, 500);
});