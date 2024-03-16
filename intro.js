var header = document.querySelector(".header");
var prevScrollpos = window.pageYOffset;

// Toggle class hide [ add , remove ] on header by scroll window
function scrollHide() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.remove("hide");
  } else {
    header.classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
}
// Selector all navbar links
let navbarLinks = document.querySelectorAll(".navbar a");

// Toggle class active [ add , remove ] on main link section
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

//! Any element that contains a id is called [ getElementById ]
let navbar = document.querySelector(".navbar");
// document.querySelector("#menu-btn").onclick = function () {
document.getElementById("menu-btn").addEventListener("click", () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
  cartitem.classList.remove("active");
});

// Close the navbar by clicking anywhere
document.addEventListener("click", (e) => {
  if (e.target.id != "navbar" && e.target.id != "menu-btn") {
    if (document.querySelector(".navbar.active")) {
      navbar.classList.remove("active");
    }
  }
});

let cartitem = document.querySelector(".cart-item-container");
// document.querySelector("#cart-btn").onclick = function () {
document.getElementById("cart-btn").addEventListener("click", () => {
  cartitem.classList.toggle("active");
  navbar.classList.remove("active");
  search.classList.remove("active");
});

// Close the cart drawer by clicking anywhere
document.addEventListener("click", (e) => {
  if (e.target.id != "cartDrawer" && e.target.id != "cart-btn") {
    if (document.querySelector(".cart-item-container.active")) {
      cartitem.classList.remove("active");
    }
  }
});

let search = document.querySelector(".search-form");
document.getElementById("search-btn").addEventListener("click", () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
  cartitem.classList.remove("active");
});

// Close the search bar by clicking anywhere
document.addEventListener("click", (e) => {
  if (e.target.id != "userSearchInput" && e.target.id != "search-btn") {
    if (document.querySelector(".search-form.active")) {
      search.classList.remove("active");
    }
  }
});
const arrowUpBtn = document.getElementById("arrow-up-btn");


// Go to the top by clicking the arrow botton
arrowUpBtn.addEventListener("click", function(){
  window.scrollTo({ top: 0, behavior: "smooth" })}
);
////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  const slideshow = document.querySelector('.slideshow');
  const images = slideshow.querySelectorAll('img');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 3000); 
  showImage(currentIndex); 
});



let pro = document.getElementById('Product');
pro.addEventListener('click', function(event) {
  event.preventDefault();  // Prevent the default behavior of the link

    window.location.href = 'products.html';
});
let men =document.getElementById('Menu');

men.addEventListener('click', function(event) {
  event.preventDefault();  // Prevent the default behavior of the link

    window.location.href = 'menu.html';
});
