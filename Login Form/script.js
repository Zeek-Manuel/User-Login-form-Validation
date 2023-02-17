// check for wrong email addresses
// check for empty inputs
// disable button if fields not completed

let emailInput = document.querySelector('.email')
let passwordInput = document.querySelector('.password')
let form = document.querySelector('.form')
let submitButton = document.querySelector('.submit')
submitButton.classList.add('btn-disabled')

function ValidateEmailAddress(email) { return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) }

form.addEventListener('keyup', (e) => {
    e.preventDefault()

    let isGreaterThanFiveChars =  Object.values({ email: emailInput.value, password: passwordInput.value }).every((value) => value.length > 5)

    isGreaterThanFiveChars ? submitButton.classList.remove('btn-disabled') : submitButton.classList.add('btn-disabled')

    // let formData = {
    //     email: emailInput.value,
    //     password: passwordInput.value
    // }

    // let formDataValue = Object.values(formData)
    // let isGreaterThanFiveChars = formDataValue.every((value) => value.length > 5)

    // isGreaterThanFiveChars ? submitButton.classList.remove('btn-disabled') : submitButton.classList.add('btn-disabled')

    // if(isGreaterThanFiveChars) {
    //     submitButton.classList.remove('btn-disabled')
    // }
    // else {
    //     submitButton.classList.add('btn-disabled')
    // }
}) 

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let formData = {
        email: emailInput.value,
        password: passwordInput.value
    }

    if(!ValidateEmailAddress(formData.email)) {
        emailInput.classList.add('input-error')
        submitButton.classList.add('btn-disabled')
        alert('Enter valid email')
    }
})