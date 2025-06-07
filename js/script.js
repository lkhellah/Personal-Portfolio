document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const messageCounter = document.createElement("small");
  messageInput.parentNode.appendChild(messageCounter);

  function updateCounter() {
    const count = messageInput.value.length;
    messageCounter.textContent = `${count}/500 characters`;
    if (count > 500) {
      messageCounter.style.color = "red";
    } else {
      messageCounter.style.color = "gray";
    }
  }

  messageInput.addEventListener("input", updateCounter);

  function validateForm() {
    if (!nameInput.value.trim()) {
      alert("Please enter your name.");
      return false;
    }
    if (!emailInput.value.includes("@")) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!messageInput.value.trim()) {
      alert("Message cannot be empty.");
      return false;
    }
    return true;
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      console.log("Form submitted:");
      console.log("Name:", nameInput.value);
      console.log("Email:", emailInput.value);
      console.log("Message:", messageInput.value);

      alert(`Thanks, ${nameInput.value}! Your message has been received.`);
      form.reset();
      updateCounter(); // Reset counter too
    });
  }

  updateCounter(); // Initialize counter
});
