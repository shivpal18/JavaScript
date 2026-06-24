// Show a message when "Join Now" button is clicked
function joinNow() {
    alert("Thank you for your interest! Visit us to join.");
}

// Show a message when a membership plan is selected
function choosePlan(plan) {
    alert(`You have selected the ${plan}. Please contact us for further details!`);
}

// Handle contact form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all the fields.");
    }
}