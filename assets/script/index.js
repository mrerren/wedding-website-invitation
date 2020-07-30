// navbar configuration
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("nav").style.backgroundColor = "white";
        document.querySelector("nav").style.boxShadow = "rgb(167, 158, 158) 0px 10px 20px -10px";
    } else {
        document.querySelector("nav").style.backgroundColor = "transparent";
        document.querySelector("nav").style.boxShadow = "unset";
    }
}

// end of navbar configuration

// mobile navbar configuration 
const mobileNavbar = document.querySelector(".mobile-navbar");
const bg = document.querySelector(".mobile-navbar .bg");
const navIcon = document.querySelector(".mobile-navbar i");

mobileNavbar.addEventListener("click", function() {
    bg.classList.toggle("toggle");
    navIcon.classList.toggle("nav-icon");
});
// end of mobile navbar configuration



const date = new Date();

function addCard() {

    let cardList = {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
        days: new Intl.DateTimeFormat("en", { day : "2-digit" }).format(date),
        months: new Intl.DateTimeFormat("en", { month : "short" }).format(date),
        years: new Intl.DateTimeFormat("en", { year : "2-digit" }).format(date),
        hours: new Intl.DateTimeFormat("id", { hour : "numeric" }).format(date),
        minutes: new Intl.DateTimeFormat("en", { minute : "2-digit" }).format(date)
    };

    putGreeting(cardList);
    document.forms[0].reset();
    renderGreeting();
}

let submit = document.querySelector("button.rsvp-submit");

document.addEventListener("DOMContentLoaded", function() {
    submit.addEventListener("click", function() {

        let nameError = document.querySelector(".name-error");
        let messageError = document.querySelector(".message-error");
        
        if (document.querySelector("#name").value == "") {
            nameError.style.display = "block"

            setTimeout(function() {
                nameError.style.display = "none";
            }, 2000);

        } else if (document.querySelector("#message").value == "") {
            messageError.style.display = "block"

            setTimeout(function() {
                messageError.style.display = "none";
            }, 2000);
        } else {
            addCard();
        }
    });
});