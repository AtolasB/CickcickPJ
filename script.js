let count = 0;
const btnC = document.getElementById("btnClick");
const displayNum = document.getElementById("number");

btnC.addEventListener("click", function() {
    count = count + 1
    displayNum.textContent = count
});