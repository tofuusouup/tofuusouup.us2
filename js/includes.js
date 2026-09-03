document.addEventListener("DOMContentLoaded", function () {

    // Load Navigation
    fetch("includes/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading navigation:", error));


    // Load Footer
    fetch("includes/footer.html")
        .then(response => response.text())
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
        })
        .catch(error => console.error("Error loading visitor counter:", error));

});