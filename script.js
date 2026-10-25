let count = 0;
const btnC = document.getElementById("btnClick");
const displayNum = document.getElementById("number");

btnC.addEventListener("click", function() {
  count = count + 1;
  displayNum.textContent = count;
 
  alert(btnC.offsetWidth);          // ก่อนซ่อน
  btnC.style.display = "none";
  alert(btnC.offsetWidth);          // หลังซ่อน

  const maxX = window.innerWidth - btnC.offsetWidth;
  const maxY = window.innerHeight - btnC.offsetHeight;

  
  setTimeout(function() {
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnC.style.left = x + "px";
    btnC.style.top = y + "px";
    btnC.style.display = "block"
  }, 2000);
});