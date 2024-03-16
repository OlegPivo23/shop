
const warningBlock = document.querySelector('.header__warning');
const warningBtn = document.querySelector('.warning-button');
const popap = document.querySelector('.warning__popap');

const popapBtn = document.querySelector('.warning-button-popap');



function popapInit(){
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || window.pageYOffset;
    console.log('Scroll position:', scrollTop);
    if(scrollTop >= 1204){
      if(warningBlock.classList.contains('hidden')){
        console.log('о ноу');
      } else{
        warningBlock.classList.add('hidden');
        popap.classList.remove('hidden');
      }
    }
  });
}

function popapClose(){
  popapBtn.addEventListener('click', () => {
    popap.classList.add('hidden');
  })
}


function warningBlockRemove(){
  warningBtn.addEventListener(
    "click", function(){
        warningBlock.classList.add('hidden')
    }
  )   
  
}


function animateInit(){
  AOS.init();

  AOS.init({
    // Global settings:
    disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
};


function validation(form){
  
  function createError(input,text){
    const parent = input.parentNode;
    parent.classList.add('error');
  }
  
  let result = true;

  const allInputs = form.querySelectorAll('input');
    for (const input of allInputs) {
      if(input.value == ""){
        result = false;
        createError(input, 'Заполните поле')
      }
    }

  return result;
  

}

document.getElementById("add-form").addEventListener('submit', function(event) {
  event.preventDefault();

  if(validation(this) === true){
    alert('форма проверена')
  }
});

  





animateInit();
warningBlockRemove();
// popapInit();
popapClose();












