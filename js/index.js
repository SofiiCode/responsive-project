let cart = {
  djdjd: 1,
  djdjd2: 2,
  djdjd3: 3,
};


const addFunction = (id) => {
    console.log(id)
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
  renderCart();
};
const minusFunction = (id) => {
  if (cart[id] - 1 == 0) {
    deleteFunction(id);
    return true;
  } else {
    cart[id]--;
    renderCart();
  }
};
const deleteFunction = (id) => {
  delete cart[id];
  renderCart();
};
const renderCart = () => {
  console.log(cart);
};
// renderCart();
