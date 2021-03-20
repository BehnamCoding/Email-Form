// imports

const handleFunc = (function () {

    class Handle {
        constructor() {
            this.email_input = document.querySelector('#email');
            this.subject_input = document.querySelector('#subject');
        }

        emailValidate() {
            let pattern = /^[a-zA-Z0-9\.?\-?]+\@[a-z]+\.[a-z]{2,}/;

            if(pattern.test(this.email_input.value)) {
                this.email_input.classList.add('is-valid');
                this.email_input.classList.remove('is-invalid');
            }else {
                this.email_input.classList.add('is-invalid');
                this.email_input.classList.remove('is-valid');
            }
        }

        subValidate() {
            let pattern = /^[a-zA-Z0-9\.?\-?]{1,}/;

            if(pattern.test(this.subject_input.value)) {
                this.subject_input.classList.add('is-valid');
                this.subject_input.classList.remove('is-invalid');
            }else {
                this.subject_input.classList.add('is-invalid');
                this.subject_input.classList.remove('is-valid');
            }
        }

    }

    // instance
    let handle = new Handle();

    // return methods
    return { // object to return methods in this class.
        emailValidate: function() {
            return handle.emailValidate();
        },
        subValidate: function() {
            return handle.subValidate();
        }
    }

})()

export default handleFunc; // export main function to use return object.