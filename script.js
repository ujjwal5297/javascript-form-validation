const regex_firstName = /^[a-zA-Z]{3,15}$/
const regex_lastName = /^[a-zA-Z]{3,15}$/
const regex_email = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
const regex_contactNumber = /^[0-9]{10}$/
const regex_password = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/

// submission of form data
const form = document.getElementById('EmployeeRegistrationForm')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // get all the value from form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const password = document.getElementById('password').value;
    const designation = document.getElementById('designation').value;
    const hobby = document.querySelectorAll('input[type="checkbox"]');
    const confirmPassword = document.getElementById('confirmPassword').value

    const hobbies = [];
    hobby.forEach((checkbox) => {
        if (checkbox.checked) {
            hobbies.push(checkbox.value);
        }
    });

    if ((firstName != "" && lastName != "" && email != "" && contactNumber != "" && password != "" && confirmPassword != "" && (hobbies.length >= 2))
        &&
        (regex_firstName.test(firstName) && regex_lastName.test(lastName) && regex_email.test(email) && 
        regex_contactNumber.test(contactNumber) && regex_password.test(password) && password == confirmPassword && 
        (designation == 'intern' || designation == 'junior software engineer' || designation == 'team lead' || designation == 'project manager'))
    ) {
        const getItem = () => {
            return JSON.parse(localStorage.getItem('users')) || []
        }

        let users = getItem()
        if (users.some((v) => { return v.email == email })) {
            document.getElementById('alert').style.display = 'block';
        }
        else {
            const data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                contactNumber: contactNumber,
                hobbies: hobbies,
                designation: designation,
                password: password,
                confirmPassword: confirmPassword
            }
            users.push(data);

            const setItem = (users) => {
                localStorage.setItem('users', JSON.stringify(users))
            }

            setItem(users)
            window.location.href = location.href
        }
    }
    // prevent form submission if details are not in proper format
    else {
        e.preventDefault()
        document.getElementById('empty-alert').style.display = 'block';

        if (firstName.trim() === "") {
            document.getElementById('validate-first-name').innerHTML = "Please enter your first name";
        } else {
            document.getElementById('validate-first-name').innerHTML = "";
        }
        if (lastName.trim() === "") {
            document.getElementById('validate-last-name').innerHTML = "Please enter your last name";
        } else {
            document.getElementById('validate-last-name').innerHTML = "";
        }
        if (email.trim() === "") {
            document.getElementById('validate-email').innerHTML = "Please enter your email address";
        } else {
            document.getElementById('validate-email').innerHTML = "";
        }
        if (contactNumber.trim() === "") {
            document.getElementById('validate-contact-number').innerHTML = "Please enter your contactNumber number";
        } else {
            document.getElementById('validate-contact-number').innerHTML = "";
        }
        if (designation == "") {
            document.getElementById('validate-designation').innerHTML = "Please select your designation";
        } else {
            document.getElementById('validate-designation').innerHTML = "";
        }
        if (password.trim() === "") {
            document.getElementById('validate-password').innerHTML = "Please enter a password";
        } else {
            document.getElementById('validate-password').innerHTML = "";
        }
        if (confirmPassword.trim() === "") {
            document.getElementById('validate-confirm-password').innerHTML = "Please confirm your password";
        } else {
            document.getElementById('validate-confirm-password').innerHTML = "";
        }
        if (hobbies.length < 2) {
            document.getElementById('validate-hobbies').innerHTML = "Please select atleast two hobbies";
        }
        else {
            document.getElementById('validate-hobbies').innerHTML = "";
        }
    }

})

//input field validations
const firstName = document.getElementById('firstName');
const firstNameValidation = document.getElementById('validate-first-name');

firstName.addEventListener('input', (event) => {
    if (!regex_firstName.test(event.target.value)) {
        firstNameValidation.innerHTML = "First name must contain only 3 to 15 characters";
        firstName.classList.remove('is-valid');
        firstName.classList.add('is-invalid');
    } else {
        firstNameValidation.innerHTML = "";
        firstName.classList.remove('is-invalid');
        firstName.classList.add('is-valid');
    }
});
firstName.addEventListener('blur', (event) => {
    if (!regex_firstName.test(event.target.value)) {
        firstNameValidation.innerHTML = "First name must contain only 3 to 15 characters";
        firstName.classList.remove('is-valid');
        firstName.classList.add('is-invalid');
    } else {
        firstNameValidation.innerHTML = "";
        firstName.classList.remove('is-invalid');
        firstName.classList.add('is-valid');
    }
});

const lastName = document.getElementById('lastName');
const lastNameValidation = document.getElementById('validate-last-name');

lastName.addEventListener('input', (event) => {
    if (!regex_lastName.test(event.target.value)) {
        lastNameValidation.innerHTML = "Last name must contain only 3 to 15 characters";
        lastName.classList.remove('is-valid');
        lastName.classList.add('is-invalid');
    } else {
        lastNameValidation.innerHTML = "";
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
    }
});
lastName.addEventListener('blur', (event) => {
    if (!regex_lastName.test(event.target.value)) {
        lastNameValidation.innerHTML = "Last name must contain only 3 to 15 characters";
        lastName.classList.remove('is-valid');
        lastName.classList.add('is-invalid');
    } else {
        lastNameValidation.innerHTML = "";
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
    }
});

const email = document.getElementById('email');
const emailValidation = document.getElementById('validate-email');

email.addEventListener('input', (event) => {
    if (!regex_email.test(event.target.value)) {
        emailValidation.innerHTML = "Please enter valid email address";
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
    } else {
        emailValidation.innerHTML = "";
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
});
email.addEventListener('blur', (event) => {
    if (!regex_email.test(event.target.value)) {
        emailValidation.innerHTML = "Please enter valid email address";
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
    } else {
        emailValidation.innerHTML = "";
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
});

const contactNumber = document.getElementById('contactNumber');
const contactNumberValidation = document.getElementById('validate-contact-number');

contactNumber.addEventListener('input', (event) => {
    if (!regex_contactNumber.test(event.target.value)) {
        contactNumberValidation.innerHTML = "Please enter a valid mobile number";
        contactNumber.classList.remove('is-valid');
        contactNumber.classList.add('is-invalid');
    } else {
        contactNumberValidation.innerHTML = "";
        contactNumber.classList.remove('is-invalid');
        contactNumber.classList.add('is-valid');
    }
});
contactNumber.addEventListener('blur', (event) => {
    if (!regex_contactNumber.test(event.target.value)) {
        contactNumberValidation.innerHTML = "Please enter a valid mobile number";
        contactNumber.classList.remove('is-valid');
        contactNumber.classList.add('is-invalid');
    } else {
        contactNumberValidation.innerHTML = "";
        contactNumber.classList.remove('is-invalid');
        contactNumber.classList.add('is-valid');
    }
});

const password = document.getElementById('password');
const passwordValidation = document.getElementById('validate-password');

password.addEventListener('input', (event) => {
    if (!regex_password.test(event.target.value)) {
        passwordValidation.innerHTML = "Password must contain atleast one special character, one number and one alphabet";
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
    } else {
        passwordValidation.innerHTML = "";
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
});
password.addEventListener('blur', (event) => {
    if (!regex_password.test(event.target.value)) {
        passwordValidation.innerHTML = "Password must contain atleast one special character, one number and one alphabet";
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
    } else {
        passwordValidation.innerHTML = "";
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
});

const confirmPassword = document.getElementById('confirmPassword');
const confirmPasswordValidation = document.getElementById('validate-confirm-password');

confirmPassword.addEventListener('input', (event) => {
    if (event.target.value !== password.value) {
        confirmPasswordValidation.innerHTML = "Password and confirm password should be same";
        confirmPassword.classList.remove('is-valid');
        confirmPassword.classList.add('is-invalid');
    }
    else {
        confirmPasswordValidation.innerHTML = "";
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
    }
});
confirmPassword.addEventListener('blur', (event) => {
    if (event.target.value !== password.value) {
        confirmPasswordValidation.innerHTML = "Password and confirm password should be same";
        confirmPassword.classList.remove('is-valid');
        confirmPassword.classList.add('is-invalid');
    } else {
        confirmPasswordValidation.innerHTML = "";
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
    }
});

