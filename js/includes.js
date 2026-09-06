document.addEventListener("DOMContentLoaded", function () {
    // Load Navigation
    fetch("includes/nav.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Navigation file could not be loaded.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading navigation:", error));

    // Load Footer
    fetch("includes/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer file could not be loaded.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
    
    // Load Form
    fetch("includes/form.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Form file could not be loaded.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("form-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading form:", error));

    // Load Visitor Counter
    fetch("includes/visitor_count.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Visitor counter file could not be loaded.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("visitor-count-placeholder").innerHTML = data;
            // Start visitor counter
            updateVisitorCount();
        })
        .catch(error => console.error("Error loading visitor counter:", error));
});

// Visitor Counter
async function updateVisitorCount() {
    console.log("VISITOR COUNTER FUNCTION STARTED");
    const workspace = "tofuusouup";
    const counter = "website-visitors";
    const url = `https://api.counterapi.dev/v2/${workspace}/${counter}/up`;
    console.log("CounterAPI URL:", url);
    try {
        const response = await fetch(url);
        console.log("CounterAPI HTTP status:", response.status);
        const result = await response.json();
        console.log("CounterAPI response:", result);
        if (!response.ok) {
            throw new Error("CounterAPI request failed.");
        }
        const count = result.data.up_count;
        const formattedCount = String(count).padStart(6, "0");
        document.getElementById("visitor_num").textContent = formattedCount;
    } catch (error) {
        console.error("Visitor counter error:", error);
        document.getElementById("visitor_num").textContent = "000000";
    }
}

// Contact Form Test
document.addEventListener("submit", function (event) {
    if (event.target.id !== "contact-form") {
        return;
    }

    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log("CONTACT FORM TEST");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    document.getElementById("form-status").textContent =
        "Message captured successfully!";
});