// const inputValue = document.getElementById("userData");
// inputValue.addEventListener("input", function(){
//     if (this.value) {
//         this.style.textAlign = 'left';
//     } else {
//         this.style.textAlign = 'center';
//     }
// })
// script.js
let isActive = false;
const btn = document.getElementById("btnChange");
const modal = document.getElementById("modalHead");
const block = document.getElementById("dissBlock");
const button = document.getElementById("btnDiss");
btn.addEventListener("click", () => {
    if (!isActive) {
        modal.innerHTML = "Sign Up";
        block.style.display = "none";
        button.style.display = "block";
    } else {
        modal.innerHTML = "Create Account";
        block.style.display = "flex";
        button.style.display = "none";
    }
    isActive = !isActive
});
