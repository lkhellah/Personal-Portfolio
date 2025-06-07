document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact-form");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent page reload
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
  
        // Log to console for demo
        console.log("Form submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
  
        // Show alert
        alert(`Thanks, ${name}! Your message has been received.`);
  
        // Clear form
        form.reset();
      });
    }
  });
  
  