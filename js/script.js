// ===== AMAZON CLONE SCRIPT =====

// Search
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-icon");

searchBtn.addEventListener("click", searchProduct);

searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchProduct();
    }
});

function searchProduct() {
    const value = searchInput.value.trim();

    if (value === "") {
        alert("Please enter a product name.");
    } else {
        alert("Searching for: " + value);
    }
}

// Back To Top
const backTop = document.querySelector(".foot-panel1");

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Sign In Button
const signBtn = document.querySelector(".sign-in-sec button");

signBtn.addEventListener("click", () => {
    alert("Sign In page coming soon...");
});

// Prime Button
const primeBtn = document.querySelector(".prime-popup button");

primeBtn.addEventListener("click", () => {
    alert("Welcome to Amazon Prime!");
});

// Hover Animation on Product Boxes
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {
        box.style.transform = "translateY(-8px)";
        box.style.transition = "0.3s";
        box.style.boxShadow = "0 6px 20px rgba(0,0,0,.2)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "translateY(0)";
        box.style.boxShadow = "none";
    });

});

// Hero Image Slider

const hero = document.querySelector(".hero-sec");
console.log(hero);
const images = [
    "images/2nd.jpg",
    "images/banner2.png",
    "images/banner3.png",
    "images/banner4.png"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    hero.style.backgroundImage = `url(${images[index]})`;

},4000);