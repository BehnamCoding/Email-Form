// imports
import handle from './handle';
import ui from './ui';

// variables
let email_input = document.querySelector('#email');
let subject_input = document.querySelector('#subject');
let textArea_input = document.querySelector('#textarea');
let reset_btn = document.querySelector('#reset');
let frm = document.querySelector('#frm');


// loadAllEvents
loadAllEvents();
function loadAllEvents() {

    email_input.addEventListener('keyup' , inputValidation);

    subject_input.addEventListener('keyup' , inputValidation);

    textArea_input.addEventListener('keyup' , inputValidation);

    reset_btn.addEventListener('click' , resetFunc);

    frm.addEventListener('submit' , sendFunc);

}

// functions

// inputValidation
function inputValidation() {
    handle.emailValidate();
    handle.subValidate();

    ui.enableBtnSend();
}

// resetFunc
function resetFunc() {  
    ui.resetInputs();
}

// sendFunc
function sendFunc(e) {
    e.preventDefault();
    ui.sendEmail();
}
