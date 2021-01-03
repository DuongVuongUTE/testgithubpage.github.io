const btn = document.querySelector(".menu")
btn.addEventListener("click",function activeMenu(params) {
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector(".navigation").classList.toggle("active");
})