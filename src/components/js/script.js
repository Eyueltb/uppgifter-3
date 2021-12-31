const validMinValue = (value, minLength=2) => {
    return value.length >= minLength;
}
const validEmail = (value) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (regEx.test(value));
}
const validPostalCode = (value, RequiredLength=5) => {
    return value.length === RequiredLength;
}

const checkValidForm = (elements) => {
    let disable = false
    let errors = document.querySelectorAll('.is-invalid')
    let submitButton = document.querySelectorAll('.submit')[0]

    elements.forEach(element => {
        if(element.value === "" || errors.length > 0)
            disable = true
    })

    if(submitButton !== undefined)
        submitButton.disabled = disable
    if(!disable){
        const firstName = document.getElementById('regForm-firstName');
        const lastName = document.getElementById('regForm-lastName');
        const email = document.getElementById('regForm-email');

        let customer = {
            firstName : firstName,
            lastName : lastName,
            email : email,

        }
        onSubmit(customer);
    }

}

const validateLength = (element) => {
    element.addEventListener("keyup", function (e) {
        if (!validMinValue(e.target.value)) {
            e.target.classList.add("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "block"
            checkValidForm(forms)
        } else {
            e.target.classList.remove("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "none"
            checkValidForm(forms)
        }
    })
}
const validatePostalCode = (element) => {
    element.addEventListener("keyup", function (e) {
        if (!validPostalCode(e.target.value)) {
            e.target.classList.add("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "block"
            checkValidForm(forms)
        } else {
            e.target.classList.remove("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "none"
            checkValidForm(forms)
        }
    })
}
const validateEmail = (element) => {
    element.addEventListener("keyup", function (e) {
        if (!validEmail(e.target.value)) {
            e.target.classList.add("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "block"
            checkValidForm(forms)
        } else {
            e.target.classList.remove("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "none"
            checkValidForm(forms)
        }
    })
}

function setEventListeners  ()  {
    forms.forEach(element => {
        switch(element.id) {
            case "firstName":
                validateLength(element);
                break;
            case "regForm-lastName":
                validateLength(element);
                break;
            case "regForm-email" :
                validateEmail(element);
                break;
            case "regForm-address":
                validateLength(element);
                break;
            case "postalCode":
                validatePostalCode(element);
                break;
        }
    })
}
function onSubmit(customer) {
    console.log("submitted", customer);

}

var forms = document.querySelectorAll('.needs-validation')
setEventListeners()
checkValidForm(forms)