/* navBar */
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "navMenu") {
    menuBtn.className += "responsive";
  } else {
    menuBtn.className = "navMenu";
  }
}

/* shadow on navbar while scrolling */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0px 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// alert for empty projects
function msg() {
  alert("Empty! There are no projects");
}

// alert for no cv
function msg2() {
  alert("Very soon, the CV will uploaded on it");
}

//form validation

let InputField = document.querySelector(".inputField");
let EmailField = document.querySelector(".emailField");
let Message = document.querySelector(".textArea textarea");
let FormControl = document.querySelector(".formControl");
let SpanError = document.querySelector(".spanError");

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

FormControl.addEventListener("submit", (event) => {
  let nameValue = InputField.value.trim();
  let emailValue = EmailField.value.trim();

  event.preventDefault();

  if (!nameValue || !emailValue) {
    alert("All fields are required!");
    return;
  }

  if (!emailPattern.test(emailValue)) {
    SpanError.style.display = "inline";
    return;
  }

  alert("Form submitted successfully!");
  FormControl.submit();
});
