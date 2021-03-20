// imports

const uiFunc = (function () {

    class Ui {
        constructor() {
            this.email_input = document.querySelector('#email');
            this.subject_input = document.querySelector('#subject');
            this.message_area = document.querySelector('#message');
            this.textarea_input = document.querySelector('#textarea');
            this.send_btn = document.querySelector('#send');
            this.images_area = document.querySelector('#images');
            this.images_mail = document.querySelector('#images .mail');
        }

        resetInputs() {
            this.email_input.classList.remove('is-valid', 'is-invalid');
            this.subject_input.classList.remove('is-valid', 'is-invalid');
            this.images_mail.style.display = 'none';
            
            if(!this.send_btn.hasAttribute('disabled')) {
                this.send_btn.setAttribute('disabled' , 'disabled');
            }
        }

        showMessage(text, color) {
            let div = document.createElement('div');
            div.textContent = text;
            div.classList = `alert alert-${color} mt-3 message`;

            if (!document.querySelector('.message')) {
                this.message_area.appendChild(div);
            }

            setTimeout(() => {
                this.removeAlert();
            }, 2500);
        }

        removeAlert() {
            let alert = document.querySelector('.message');
            if (alert) {
                alert.remove();
            }
        }

        enableBtnSend() {
            let invalid = document.getElementsByClassName('is-invalid');
            let textArea = this.textarea_input.value;

            if (invalid.length === 0 && textArea !== '') {
                this.send_btn.removeAttribute('disabled');
            } else if (invalid.length > 0 || textArea === '') {
                this.send_btn.setAttribute('disabled', 'disabled');
            }
        }

        sendEmail() {
            document.getElementById('reset').click();

            // create image element
            let img = document.createElement('img');
            img.src = './images/spinner.gif';
            img.classList = 'image-spinner';

            this.images_area.appendChild(img);

            // setTimeout
            setTimeout(() => {
                document.querySelector('.image-spinner').remove();
                this.images_mail.style.display = 'block';
            }, 3500);

        }

    }

    // instance
    let ui = new Ui();

    // return methods
    return {
        resetInputs: function () {
            return ui.resetInputs();
        },
        showMessage: function (text, color) {
            return ui.showMessage(text, color);
        },
        enableBtnSend: function () {
            return ui.enableBtnSend();
        },
        sendEmail: function () {
            return ui.sendEmail();
        }
    }

})()

export default uiFunc; // export main function to use return object.