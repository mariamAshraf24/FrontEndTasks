var form = document.getElementById("form");
var FirstName = document.getElementsByName("fname")[0];
var LastName = document.getElementsByName("lname")[0];
var Email = document.getElementsByName("emailAdd")[0];
var Password = document.getElementsByName("password")[0];

var fnameError = document.getElementById("fnameError");
var lnameError = document.getElementById("lnameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  let isValid = true;

  if (FirstName.value.trim() === "") {
    isValid = false;
    showError(FirstName, fnameError, "First Name cannot be empty");
  }

  if (LastName.value.trim() === "") {
    isValid = false;
    showError(LastName, lnameError, "Last Name cannot be empty");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (Email.value.trim() === "") {
    isValid = false;
    showError(Email, emailError, "Email Address cannot be empty");
  } else if (!emailPattern.test(Email.value)) {
    isValid = false;
    showError(Email, emailError, "Looks like this is not an email");
  }

  if (Password.value.trim() === "") {
    isValid = false;
    showError(Password, passwordError, "Password cannot be empty");
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.submit();
  }
});

function showError(input, errorElement, message) {
  input.classList.add("error-border");
  errorElement.innerText = message;
  const errorImg = input.parentElement.querySelector(".error-img");
  if (errorImg) {
    errorImg.style.display = "inline"; 
  }
}       
                                        
function clearErrors() {
  [FirstName, LastName, Email, Password].forEach((input) =>
    input.classList.remove("error-border")
  );
  [fnameError, lnameError, emailError, passwordError].forEach(
    (errorElement) => (errorElement.innerText = "")
  );
}
