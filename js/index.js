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
    let numbers= cart[id]
    console.log(cart)
    for (i = 0; i < carts.length; i++) {
     
      if(carts[i].id===id){
         console.log(carts[i].product);
          let wrapper = document.getElementById("busket-wrapper");

          let cartElement = document.createElement("div");
          let lastDiv = wrapper.lastChild;

          let insertedElement = wrapper.insertBefore(cartElement, lastDiv);
          insertedElement.classList.add("col-4");
          insertedElement.classList.add("cart-box");

          let cartsHTML = `
            <img class="img-fluid mt-3" src="https://cdn.shopify.com/s/files/1/0284/6546/3349/products/MetalPegs3_360x.jpg?v=1599600281" alt="Product name">
            <h5 class="mt-2 cart-tittle">${carts[i].product}</h5>
            <p>${carts[i].price}</p>
            <p id='num'>${numbers}</p>
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
  if (event.target.classList.contains("plus")) {
    plusFunction(event.target.dataset.id);
  }
  if (event.target.classList.contains("minus")) {
    minusFunction(event.target.dataset.id);
  }
   
};
const plusFunction = (id) => {
  cart[id]++;
  renderCart(id);
};
const minusFunction = (id) => {
  if (cart[id] - 1 == 0) {
    deleteFunction(id);
    return true;
  } else {
    cart[id]--;
    renderCart(id);
  }
};
const deleteFunction = (id) => {
  delete cart[id];
  renderCart(id);
};
const renderCart = (id) => {
  let num = document.getElementById('num')
  num.innerHTML= cart[id]
};
// renderCart();
