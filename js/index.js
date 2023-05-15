let cart = {
  
};

const carts = [
  { id: "djdjd", product: "Shampoo", numbers: 1, price: 10 },
  { id: "djdjd2", product: "Souer", numbers: 2, price: 8 },
  { id: "djdjd3", product: "Cream", numbers: 3, price: 11 },
];
console.log(carts)
for(i=0; i<carts.length; i++){
  addCarts(carts[i]);
  
}
function addCarts(data){
  let cartsWrapper = document.getElementById('carts-wrapper');
 let cartElement = document.createElement("div");
 let lastDiv = cartsWrapper.lastChild;

 let insertedElement = cartsWrapper.insertBefore(cartElement, lastDiv);
   insertedElement.classList.add("col-sm-4");
   insertedElement.classList.add("cart-box");

let cartsHTML = `
            <img class="img-fluid mt-3" src="https://cdn.shopify.com/s/files/1/0284/6546/3349/products/MetalPegs3_360x.jpg?v=1599600281" alt="Product name">
            <h5 class="mt-2 cart-tittle">${data.product}</h5>
            <p class="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores earum eum sed aliquid ipsum dolor. At sequi recusandae iure ab esse temporibus maxime minima modi repudiandae dicta, veniam accusantium asperiores!</p>
            <p>${data.price}$</p>
            <button href="#" class="btn btn-second mb-3 add" data-id ="${data.id}">Add to Cart</button>`;
       
            insertedElement.innerHTML = cartsHTML;
}










const addFunction = (id) => {
  
    cart[id]=1;
    // let number= cart[id]
  
    
document.onclick = (event) => {
  if (event.target.classList.contains("plus")) {
    plusFunction(event.target.dataset.id);
    console.log(cart[id]);
  }
  if (event.target.classList.contains("minus")) {
    minusFunction(event.target.dataset.id);
    console.log(cart[id]);
  }
};

    for (i = 0; i < carts.length; i++) {
     
      if(carts[i].id===id){
         console.log(carts[i].product);
          let wrapper = document.getElementById("popup");

          let cartElement = document.createElement("div");
          let lastDiv = wrapper.lastChild;

          let insertedElement = wrapper.insertBefore(cartElement, lastDiv);
          insertedElement.classList.add("col-4");
          insertedElement.classList.add("cart-box");
           insertedElement.classList.add("popup__content");
          let cartsHTML = `
            <a href="#page" class="popup__close close-popup">X</a>
            <img class="img-fluid mt-3" src="https://cdn.shopify.com/s/files/1/0284/6546/3349/products/MetalPegs3_360x.jpg?v=1599600281" alt="Product name">
            <h5 class="mt-2 cart-tittle">${carts[i].product}</h5>
            <span id="price">${carts[i].price}</span><span>$/p</span>
            <p id='num'>${cart[id]}</p>
            <p><span id="sum">${carts[i].price}</span><span>$</span></p>
            <button href="" class="btn btn-second mb-3 plus" data-id ="${id}">+</button>
            <button href="" class="btn btn-second mb-3 minus" data-id ="${id}">-</button>`;

          insertedElement.innerHTML = cartsHTML;
      }
    }
   
    
};


document.onclick = (event) => {
    if (event.target.classList.contains("add")) {
    addFunction(event.target.dataset.id);
    }
  // if (event.target.classList.contains("plus")) {
  //   plusFunction(event.target.dataset.id);
  //   event.target.parentElement.remove();
    
  // }
  // if (event.target.classList.contains("minus")) {
  //   minusFunction(event.target.dataset.id);
  //   event.target.parentElement.remove();

  // }
   
};
const plusFunction = (id) => {
  cart[id]++;
  // if (carts[i].id === id){
    
  // }
    // addFunction(id)
    // renderCart(id);
};
const minusFunction = (id) => {
  if (cart[id] - 1 === 0) {
    deleteFunction(id);
    return true;
  } else {
    cart[id]--;
    // renderCart(id);
  }
};
const deleteFunction = (id) => {
  delete cart[id];
  
};
// const renderCart = (id) => {

//   let number = cart[id];
//   for (i = 0; i < carts.length; i++) {
//     if (carts[i].id === id) {
//       console.log(carts[i].product);
//       let sum = carts[i].price * cart[id];
//       let wrapper = document.getElementById("popup");

//       let cartElement = document.createElement("div");
//       let lastDiv = wrapper.lastChild;

//       let insertedElement = wrapper.insertBefore(cartElement, lastDiv);
//       insertedElement.classList.add("col-4");
//       insertedElement.classList.add("cart-box");
//       insertedElement.classList.add("popup__content");

//       let cartsHTML = `
//             <a href="#page" class="popup__close close-popup">X</a>
//             <img class="img-fluid mt-3" src="https://cdn.shopify.com/s/files/1/0284/6546/3349/products/MetalPegs3_360x.jpg?v=1599600281" alt="Product name">
//             <h5 class="mt-2 cart-tittle">${carts[i].product}</h5>
//             <span id="price">${carts[i].price}</span><span>$/p</span>
//             <p id='num'>${number}</p>
//             <p><span id="sum">${sum}</span><span>$</span></p>
//             <button href="" class="btn btn-second mb-3 plus" data-id ="${id}">+</button>
//             <button href="" class="btn btn-second mb-3 minus" data-id ="${id}">-</button>`;

//       insertedElement.innerHTML = cartsHTML;
//     }
//   }


//   // let num = document.getElementById('num')
//   // num.innerHTML= cart[id]
    

   
// };
// renderCart();



const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", ""); // забираю з атрибута# і получаю в константу те що залишилось
      const curentPopup = document.getElementById(popupName); //
      popupOpen(curentPopup); //викликає попап
      e.preventDefault(); // це щоб заборонити ссилці пперезагружатись
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup");
    console.log(popupActive);
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  //для роботи попапу в попапі
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeaut(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}