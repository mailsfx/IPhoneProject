// ============ anchor-links ==============
const anchors = document.querySelectorAll('a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      if (anchorId != "#")
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      });
    });
  }
}


// ================= scroll-position ==================
const upArrow = document.querySelector('.up-arrow');

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 600)
    upArrow.classList.add('_active');
  else
    upArrow.classList.remove('_active');

});
// ================= Burger-Button ==================
const burger = document.querySelector('.burger-btn');

burger.addEventListener('click', ()=>{

  burger.classList.toggle('_active');


});

