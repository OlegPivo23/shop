let burgerBtn = document.querySelector('.burger-btn');
let burgerNav = document.querySelector('.nav__list');

burgerBtn.addEventListener('click', function(){
    burgerNav.classList.toggle('active')
})