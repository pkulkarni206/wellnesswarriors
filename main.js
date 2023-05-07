const form = document.getElementById("contactform");
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phoneNumber");
const messageInput = document.getElementById("message");
const consentInput = document.getElementById("consent");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form from submitting

  let errors = [];

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const phoneNumber = phoneNumberInput.value.trim();
  const message = messageInput.value.trim();
  const consent = consentInput.checked;

  // validate full name
  if (fullName === "") {
    errors.push("Please enter your full name");
    fullNameInput.classList.add("is-invalid");
  } else {
    fullNameInput.classList.remove("is-invalid");
  }

  // validate email
  if (email === "") {
    errors.push("Please enter your email address");
    emailInput.classList.add("is-invalid");
  } else if (!isValidEmail(email)) {
    errors.push("Please enter a valid email address");
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.remove("is-invalid");
  }

  // validate phone number
  if (phoneNumber === "") {
    errors.push("Please enter your phone number");
    phoneNumberInput.classList.add("is-invalid");
  } else if (!isValidPhoneNumber(phoneNumber)) {
    errors.push("Please enter a valid phone number");
    phoneNumberInput.classList.add("is-invalid");
  } else {
    phoneNumberInput.classList.remove("is-invalid");
  }

  // validate message
  if (message === "") {
    errors.push("Please enter a message");
    messageInput.classList.add("is-invalid");
  } else {
    messageInput.classList.remove("is-invalid");
  }

  // validate consent checkbox
  if (!consent) {
    errors.push("Please agree to receive emails via this email");
    consentInput.classList.add("is-invalid");
  } else {
    consentInput.classList.remove("is-invalid");
  }

  // if errors array is not empty, display error messages and return false
  if (errors.length > 0) {
    const errorDiv = document.getElementById("errorDiv");
    errorDiv.innerHTML = "";
    for (let i = 0; i < errors.length; i++) {
      errorDiv.innerHTML += "<p>" + errors[i] + "</p>";
    }
    errorDiv.classList.remove("invisible");
    return false;
  } else {
    // submit form if all fields are valid
    form.submit();
  }
});

function isValidEmail(email) {
  if (email.trim() === "") {
    return false;
  }
  if (email.indexOf("@") === -1) {
    return false;
  }
  return true;
}

// helper function to validate phone number
function isValidPhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
    return false;
  }
  return true;
}
