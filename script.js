let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let project1 = document.querySelector('#pr1');
let project2 = document.querySelector('#pr2');
let project3 = document.querySelector('#pr3');
let sendmail = document.querySelector('#sendmail');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
                
            })
        }
    })
}



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

project1.addEventListener('click', function(){
    window.open('https://achilleasmitsisconstructions.com/','_blank');
});

project2.addEventListener('click', function(){
    window.open('https://github.com/tmitsis/calculator','_blank');
});

project3.addEventListener('click', function(){
    window.open('https://github.com/tmitsis/PDA_FOR_COFFEESHOP','_blank');
});

sendmail.addEventListener('click' , function (){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById ("subject").value,
        message : document.getElementById ("message").value,
        number : document.getElementById ("number").value
    }


emailjs.send("service_qenlct4","template_yjw0hpk",parms).then(alert("Email Sent!"));

});
