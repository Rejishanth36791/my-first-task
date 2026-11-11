document.addEventListener("DOMContentLoaded", function () {

    /* FLAVORS CAROUSEL SCROLL */
    const flavorContainer = document.querySelector(".flavor-container");
    const flavorLeftBtn = document.querySelector(".left-arrow");
    const flavorRightBtn = document.querySelector(".right-arrow");

    if (flavorContainer && flavorLeftBtn && flavorRightBtn) {
        // Scroll left when clicking the left arrow
        flavorLeftBtn.addEventListener("click", function () {
            flavorContainer.scrollBy({
                left: -220,
                behavior: "smooth"
            });
        });

        // Scroll right when clicking the right arrow
        flavorRightBtn.addEventListener("click", function () {
            flavorContainer.scrollBy({
                left: 220,
                behavior: "smooth"
            });
        });
    }

    /* TESTIMONIALS SLIDER */
    const testContainer = document.querySelector(".testimonials-container");
    const testLeftBtn = document.querySelector(".left-test-arrow");
    const testRightBtn = document.querySelector(".right-test-arrow");

    if (testContainer && testLeftBtn && testRightBtn) {
        testLeftBtn.addEventListener("click", function () {
            testContainer.scrollBy({
                left: -320,
                behavior: "smooth"
            });
        });

        testRightBtn.addEventListener("click", function () {
            testContainer.scrollBy({
                left: 320,
                behavior: "smooth"
            });
        });
    }

    /* SHOPPING CART BADGE COUNTER */
    // Select all the plus (+) add buttons from discount items
    const addButtons = document.querySelectorAll(".add-btn");
    const cartCount = document.querySelector(".cart-count");
    let currentCount = 0;

    addButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            currentCount++;
            if (cartCount) {
                cartCount.textContent = currentCount;
            }
        });
    });

    /* NEWSLETTER SUBSCRIPTION ALERT */
    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevents page reload
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim() !== "") {
                alert("Thank you for joining Antix! A sweet surprise is on its way.");
                emailInput.value = ""; // Clear input field
            }
        });
    }

});