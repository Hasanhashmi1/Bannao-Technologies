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
const accbtn = document.getElementById("createAccount");
const division = document.getElementById("hiddenDiv");
const para = document.getElementById("textHolder-acc");
const span = document.getElementById("spanText");
const modalFade = document.getElementById("exampleModal");
const crack = document.getElementById("hiddenChange");
const hidBlock = document.getElementById("blockHidden");
accbtn.addEventListener("click", ()=>{
    para.style.display = "none";
    span.style.display = "none";
    division.style.display = "flex";
    
});

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
// Responsiveness 
function changeRun(){
    const mouse = document.getElementById("changeTo");
    if (!isActive) {
        mouse.innerHTML = "Leave group";
        
    } else {
        mouse.innerHTML = "Join group";
    }
    isActive = !isActive
}
// PopUp 
    const popUp = document.getElementById("hiddenPop");
    const control = document.getElementById("controlBtn");
    const cross = document.getElementById("closeBtn");

    control.addEventListener("click", ()=>{
        popUp.classList.add("active");
        control.style.display = "none";
    });

    cross.addEventListener("click", ()=>{
        popUp.classList.remove("active");
        control.style.display = "block";
    });

   function signUp(){
    const heading = document.getElementById("hiddenHead");
    const buttonHid = document.getElementById("hiddenCreateAccount");
    const hiddenForgotPassword = document.getElementById("hiddDiss");
    
    if (!isActive) {
        hidBlock.style.display = "none";
        heading.innerHTML = "Sign Up";
        buttonHid.innerHTML = "Sign In";
        hiddenForgotPassword.style.display = "block";
    } else {
        hidBlock.style.display = "flex";
        heading.innerHTML = "Create Account";
        buttonHid.innerHTML = "Create Account";
        hiddenForgotPassword.style.display = "none";
    }
    isActive = !isActive
   }