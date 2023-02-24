// DIRECT BUTTON TO ABOUT ME PAGE
function exploreClick () {
   if(location.host ===  "melroseceballos.github.io"){
    location.pathname = "/Melrose-Ceballos-Porftolio/about-me.html"
   }else{
    location.pathname = '/about-me.html'
   }
}

// DIRECT TO HOME
function directHome(){
    if(location.host ===  "melroseceballos.github.io"){
      location.pathname = "/Melrose-Ceballos-Porftolio/index.html"
     }else{
      location.pathname = '/index.html'
     }

    
}
// DIRECT TO ABOUT ME
function directAboutMe() { 
  if(location.host ===  "melroseceballos.github.io"){
    location.pathname = "/Melrose-Ceballos-Porftolio/about-me.html"
   }else{
    location.pathname = '/about-me.html'
   }
 
}
// DIRECT PROJECTS
function directProjects(){
  if(location.host ===  "melroseceballos.github.io"){
    location.pathname = "/Melrose-Ceballos-Porftolio/projects.html"
   }else{
    location.pathname = '/projects.html'
   }
}
//DIRECT CONTACT ME
function directContactMe(){
  if(location.host ===  "melroseceballos.github.io"){
    location.pathname = "/Melrose-Ceballos-Porftolio/contact-me.html"
   }else{
    location.pathname = '/contact-me.html'
   }
}
// CAROUSEL - got info from w3schools.com
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("projectsCarousel");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// MODAL
 function openModal (){
  document.getElementsByClassName('myResume')[0].style.display='block';
 }