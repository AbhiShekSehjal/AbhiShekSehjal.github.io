document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Log form data to console
    console.log("Form Data:");
    console.log(`Name: ${name}`);
    console.log(`Contact: ${contact}`);
    console.log(`Email: ${email}`);
    console.log(`Country: ${country}`);
    console.log(`Gender: ${gender}`);
    console.log(`Password: ${password}`);
    console.log(`Remember Me: ${rememberMe}`);

    // Reset the form
    document.getElementById('registrationForm').reset();

    // Display success message
    alert("Form submitted successfully!");
});