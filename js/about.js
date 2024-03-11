//  nav par

let buttons = document.querySelector(".menu-line-overall"),
   links=document.querySelector(".overall_btn");

   buttons.addEventListener("click",() =>{
      links.classList.toggle("display")

      buttons .children[0].classList.toggle("toggle1")
      buttons .children[1].classList.toggle("toggle2")
      buttons .children[2].classList.toggle("toggle3")
   })
// -----------------------------------------------

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
