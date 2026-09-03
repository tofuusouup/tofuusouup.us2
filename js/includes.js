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
    const url = 'https://api.counterapi.dev/v2/${workspace}/${counter}/up';
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