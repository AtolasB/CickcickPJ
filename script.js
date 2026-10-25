let count = 0;
const btnC = document.getElementById("btnClick");
const displayNum = document.getElementById("number");

btnC.addEventListener("click", function() {
  count = count + 1;
  displayNum.textContent = count;

  const maxX = window.innerWidth - btnC.offsetwidth;
  const maxY = window.innerHeight - btnC.offsetwidth;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btnC.style.left = x + "250px"
  btnC.style.left = y
});