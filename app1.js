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
let products = [
    {
        id: 1,
        name: 'Arabica Coffee Beans',
        image: 'Arabica Coffee Beans.jpeg',
        price: 120000
    },
    {
        id: 2,
        name: 'Chocolate Covered Coffee Beans',
        image: 'Chocolate Covered Coffee Beans.jpeg',
        price: 120000
    },
    {
        id: 3,
        name: 'Dark Coffee Beans',
        image: 'Dark Coffee Beans.jpeg',
        price: 220000
    },
    {
        id: 4,
        name: 'Ethiopian Coffee Beans',
        image: 'Ethiopian Coffee Beans.jpeg',
        price: 220000
    },   {
        id: 5,
        name: 'White Coffee Beans',
        image: 'White Coffee Beans.jpeg',
        price: 220000
    },
    {
        id: 6,
      
        name: 'Brazil Coffee Beans',
        image: 'Brazil Coffee Beans.jpeg',
        price: 220000
    }
];
let listCards  = [];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
  
