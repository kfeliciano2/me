

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');

    
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', "true");
        navToggle.setAttribute('aria-expanded',"true");
    } else if(visibility === "true"){
        primaryNav.setAttribute('data-visible',"false");
        navToggle.setAttribute('aria-expanded',"false");
    }
});

/*name change */

var text = ["Front-end Developer", "Continous Learner", "Content Creator"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 998);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}