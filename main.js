/** hambuger menu **/

let humberger_menu = document.querySelector('.hero__humberger-menu');
let navigation = document.querySelector('.hero__navigation');
    

humberger_menu.addEventListener('click',(e)=>{
            
navigation.classList.toggle('show');
humberger_menu.classList.toggle('open');    
    
    })

/**** testimonials carrousel : ********/

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if(e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
     slides.style.transform = "translateX(-51.5%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-50%)';
      e.target.classList.add('active');
    }
  }})



/*$(document).ready(function() {
    
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
})*/