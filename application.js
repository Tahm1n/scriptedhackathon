// MODAL FUNCTIONALITY

function openLightBox(){
  var modal = $('.modal');
$('.show-modal').on('click', function() {
 modal.fadeIn();
});

$('.close-modal').on('click', function() {
 modal.fadeOut();
});
}
openLightBox();

const form = document.querySelector("form");
const submit = form.querySelector("button");
const input = form.querySelectorAll("input");

const name = document.getElementById("name");
const insurance = document.getElementById("insurance");
const number = document.getElementById("number");
const email = document.getElementById("email");
const us = 

submit.addEventListener("submit", (event)=> {
    event.preventDefault();
    const text = input.value;
    if( name && insurance && number && email !== "") {
        alert("form was submited");
    } else {
        alert("make sure all forms are filled");
    }
});




