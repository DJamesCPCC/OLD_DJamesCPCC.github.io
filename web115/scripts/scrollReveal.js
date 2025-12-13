document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class "box"
    const boxes = document.querySelectorAll(".box");

    // Function to check if at least half the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        const elementWidth = rect.width;

        return (
            rect.top + elementHeight / 3 >= 0 &&
            rect.left + elementWidth / 3 >= 0 &&
            rect.bottom - elementHeight / 3 <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right - elementWidth / 3 <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Hide all boxes initially
    boxes.forEach(box => {
        box.style.opacity = "0";
        box.style.transition = "opacity 0.5s ease-out";
    });

    // Function to reveal boxes when they are in the viewport
    function revealBoxes() {
        boxes.forEach(box => {
            if (isInViewport(box)) {
                box.style.opacity = "1"; // Reveal the box
            }
        });
    }

    function hideBoxes() {
        boxes.forEach(box => {
            if (!isInViewport(box)) {
                box.style.opacity = "0";
                box.style.transition = "opacity 0.5s ease-out";
            }
        })
    }

    // Add scroll event listener to check for visibility
    window.addEventListener("scroll", revealBoxes);
    window.addEventListener("scroll", hideBoxes);
    

    // Initial check in case some boxes are already in the viewport
    revealBoxes();
});