let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


let formscontainer = document.querySelector('.formscontainer');

document.querySelector('#mail').onclick = () =>{
    formscontainer.classList.toggle('active');
}




const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");


var slidernav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    slides.forEach((slides) => {
        slides.classList.remove("active");
    });
    contents.forEach((content) => {
        content.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

}
btns.forEach((btn, i) =>{
    btn.addEventListener("click",() => {
        slidernav(i);
    });
});

// emailjs

function sendemail(){

	var email=document.getElementById("email").value;
	var name=document.getElementById("name").value;
	var message=document.getElementById("message").value;

	var templateParams = {
        email: email,
        name: name,
		message: message,
      };

      emailjs.send('service_3rthtxe', 'template_5l0xdcn', templateParams).then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Sent successfully!");
     
  })

  
}