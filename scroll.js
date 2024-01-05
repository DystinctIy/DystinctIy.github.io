console.log("scroll.js loaded");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    }); 
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((element) => { observer.observe(element); });

// Existing content of scroll.js
console.log("scroll.js loaded");
// ... rest of the existing code ...

// Add this at the end of scroll.js for the hover effect on the "Shop" title
const shopTitle = document.getElementById('shop-title');
shopTitle.addEventListener('mouseover', () => {
  shopTitle.style.color = '#777'; // Change color on hover
});
shopTitle.addEventListener('mouseout', () => {
  shopTitle.style.color = '#000'; // Revert to original color
});
