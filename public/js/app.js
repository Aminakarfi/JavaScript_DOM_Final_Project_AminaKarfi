const modal = document.getElementById('myModal');
const ModalStyle = document.getElementById('ModalStyle');
const closeBtn = document.getElementsByClassName('close')[0];

ModalStyle.onclick = function () {
    modal.style.display = 'block';
}
closeBtn.onclick = function () {
    modal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}



// ! Button
let starters = document.querySelector("#starters")
let breakfast = document.querySelector("#breakfast")
let lunch = document.querySelector("#lunch")
let dinner = document.querySelector("#dinner")



starters.addEventListener("click", () => {
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Starters"
    b.classList.add("animated")
    setTimeout(() => {
        b.classList.remove("animated")
    }, 3000);

})
breakfast.addEventListener("click", () => {
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Breakfast"
    b.classList.add("animated")
    setTimeout(() => {
        b.classList.remove("animated")
    }, 3000);



})
dinner.addEventListener("click", () => {
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Dinner"
    b.classList.add("animated")
    setTimeout(() => {
        b.classList.remove("animated")
    }, 3000);



})
lunch.addEventListener("click", () => {
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Lunch"
    b.classList.add("animated")
    setTimeout(() => {
        b.classList.remove("animated")
    }, 3000);



})

// ! carousel
