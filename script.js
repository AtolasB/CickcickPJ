let count = 0;
const btnC = document.getElementById("btnClick");
const displayNum = document.getElementById("number");

btnC.addEventListener("click", function() {
  count = count + 1;
  displayNum.textContent = count;

  const maxX = window.innerWidth - btn.offsetwidth;
  const maxY = window.innerHeight - btn.offsetwidth;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btn.style.left = x + "250px"
  btn.style.left = y
});