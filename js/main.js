let buttons = document.querySelector(".menu-line-overall"),
   links=document.querySelector(".overall_btn");

   buttons.addEventListener("click",() =>{
      links.classList.toggle("display")

      buttons .children[0].classList.toggle("toggle1")
      buttons .children[1].classList.toggle("toggle2")
      buttons .children[2].classList.toggle("toggle3")
   })

