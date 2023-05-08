const burger = document.getElementById("burger")
const links = document.querySelector(".links")
const anchors = document.querySelectorAll("a")
const sections = document.querySelectorAll("section")

// First load
// Select first anchor
anchors[1].classList.add("active")


// Show meniu in mobile view
burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    links.classList.toggle("absolute")

})


//  scroll meniu links animation
window.addEventListener("scroll", function(){
    let current 

    // finds section by offset
    for(let section of sections){
        if(window.pageYOffset >= section.offsetTop - 100){
            current = section.getAttribute("id")
        }
    }

    // changes anchors style by section id
    for(let anchor of anchors){

        anchor.classList.remove("active")
        if(anchor.getAttribute("href")  == "#" + current){
            anchor.classList.add("active")
        }
    }
})







function openText(evt, textContent) {
    var i, windowcontent, buttons;
    windowcontent = document.getElementsByClassName("tabs__content__center");
    for (i = 0; i < windowcontent.length; i++) {
      windowcontent[i].style.display = "none";
    }
    buttons = document.getElementsByClassName("button");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(" active", "");
    }
  
    // parodo norima tab pagal id
    document.getElementById(textContent).style.display = "flex";
    evt.currentTarget.className += " active";
}



let prevButton = null;

const wrapper = document.getElementById("wrapper");

wrapper.addEventListener('click', (e) => {

  const isButton = e.target.nodeName === 'BUTTON'; 
  
  if (!isButton) {
    return;
  }
  
  e.target.classList.add('active'); // Add .active CSS Class

  if(prevButton !== null) {
    prevButton.classList.remove('active');  // Remove .active CSS Class
  }
  
  prevButton = e.target;

});
