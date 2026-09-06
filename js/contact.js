document.addEventListener("submit", async function (event) {
    if (event.target.id !== "contact-form") {
        return;
    }
    event.preventDefault();
    const form = event.target;
    const status = document.getElementById("form-status");
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const website = form.website.value.trim();
    status.textContent = "Sending...";
    try {
        const response = await fetch(
            "https://tofuusouup-contact.tofuusouup.workers.dev/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    website: website
                })
            }
        );
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || "Failed to send message.");
        }
        status.textContent = "Message sent successfully!";
        form.reset();
    } catch (error) {
        console.error("Contact form error:", error);
        status.textContent =
            "Unable to send message. Please try again later.";
    }
});