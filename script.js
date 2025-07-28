document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                let hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Form validation for contact page
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            let name = document.querySelector("input[type='text']").value.trim();
            let email = document.querySelector("input[type='email']").value.trim();
            let message = document.querySelector("textarea").value.trim();
            
            if (name === "" || email === "" || message === "") {
                event.preventDefault();
                alert("Please fill out all fields before submitting.");
            }
        });
    }

    // Highlight active navigation link
    let navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
