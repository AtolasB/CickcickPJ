let count = 0;
const btnC = document.getElementById("btnClick");
const displayNum = document.getElementById("number");
const minY = displayNum.getBoundingClientRect().top;

function moveButton() {
  const maxX = window.innerWidth - btnC.offsetWidth;
  const maxY = window.innerHeight - btnC.offsetHeight;
  const x = Math.random() * maxX;
  const y = min + Math.randow() * (max - min);

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