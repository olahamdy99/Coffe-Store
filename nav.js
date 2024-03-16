//////////////switch
const themeCheckbox = document.getElementById("theme-checkbox");

      function setDarkTheme() {
        document.documentElement.setAttribute("data-theme", "dark");
      }

      function removeDarkTheme() {
        document.documentElement.removeAttribute("data-theme");
      }

      function changeTheme() {
        if (themeCheckbox.checked) {
          setDarkTheme();
          localStorage.setItem("theme", "dark");
        } else {
          removeDarkTheme();
          localStorage.removeItem("theme");
        }
      }
      themeCheckbox.addEventListener("change", changeTheme);
      function applyThemeStyles() {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
          themeCheckbox.checked = true;
          setDarkTheme();
        }
      }
      applyThemeStyles();
      ////////////////////////////////////
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products;

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { 
     if (xhr.status === 200) {
      const pro = JSON.parse(xhr.responseText);
      products = pro; 
      initApp();
    } else {
      console.error('Failed to fetch data. Status:', xhr.status);
    }
  }
};

xhr.open('GET', 'https://api.sampleapis.com/coffee/hot', true);
xhr.send();

let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <img src="${value.image}">
      <div class="title">${value.title}</div>
      <div class="price">${"20$"}</div>
      <div class="details" style="display: none;">
        <p>Description: ${value.description}</p>
        <p>Ingredients: ${value.ingredients}</p>
      </div>
      <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
    newDiv.addEventListener('mouseenter', showDetails);
    newDiv.addEventListener('mouseleave', hideDetails);
  });
}
function showDetails() {
    const details = this.querySelector('.details');
    details.style.display = 'block';
  }
  
  function hideDetails() {
    const details = this.querySelector('.details');
    details.style.display = 'none';
  }

  initApp();


function addToCard(key) {
    if (listCards[key] == null) 
     {
      listCards[key] = { ...products[key], quantity: 1 };
    } else {
      listCards[key].quantity += 1;
    }
    reloadCard();
  }
  
  function reloadCard() {
    let listCard = document.querySelector('.listCard');
    let total = document.querySelector('.total');
    let quantity = document.querySelector('.quantity');
  
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
  
    listCards.forEach((value, key) => {
      if (value) {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
  
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
          <div><img src="${value.image}"/></div>
          <div>${value.title}</div>
          <div>${20}</div>
          <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
          </div>`;
        listCard.appendChild(newDiv);
        
      }
    });
  
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
  }
  
  function changeQuantity(key, quantity) {
    if (quantity <= 0) {
      listCards.splice(key, 1);
    } else {
      listCards[key].quantity = quantity;
      listCards[key].price = quantity * 20;
    }
    reloadCard();
  }
  
 
///////////////////////////////////


var item = document.querySelectorAll('.list .item');

function addHoverEffect() {
    this.style.background='var(--black)';
    this.style.transform='scale(1.1)'; 

}

function removeHoverEffect() {
    this.style.background='var(--bg)';
    this.style.transform='scale(1)'; 


}
item.forEach(btn => {
    btn.addEventListener('mouseenter', addHoverEffect);
    btn.addEventListener('mouseleave', removeHoverEffect);
});







