// Example: Log a message when the contact button is clicked
document.querySelector('.contact-button-container .btn').addEventListener('click', function() {
    console.log('Formulário de contato aberto');
  });

const form = document.getElementById("contact-form");

const button = document.querySelector('form button')
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialogbutton")

button.onclick = function () {
  Modal.showModal()

}

