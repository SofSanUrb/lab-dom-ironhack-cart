// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  
  // extracting values from DOM element
  let priceNum = price.innerText;
  let quantityNum = quantity.value;

  //Calculate subtotal price
  let subtotal = priceNum * quantityNum;
  
  // Update DOM Subtotal element
  let subtotalBrowser = product.querySelector(".subtotal span");
  subtotalBrowser.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2 apply updateSubtotal() on each product from the Cart
  //Option 1: with getElementsByClassName method

  //let allProducts = document.getElementsByClassName('product');
  // for (let i = 0; i<allProducts.length; i++) {
  //   updateSubtotal(allProducts[i])
  // };
  
  //Option 2: with querySelectorAll method
  let totalSum = 0;

  let allProducts = document.querySelectorAll('.product');
  allProducts.forEach(elem => {
    totalSum += updateSubtotal(elem)
  });


  // ITERATION 3

  //Update the innertext from the DOM Total value with the sum
  let totalValue = document.querySelector("#total-value")
  totalValue.innerText = totalSum
}

// ITERATION 4

function removeProduct(event) {
  //Define target from the event and its parent elements
  let target = event.currentTarget;
  let child = target.parentNode.parentNode;
  let parent = child.parentNode;

  //Remove the child element
  parent.removeChild(child);
   
  //Update price when removing the product
  let totalValue = document.querySelector("#total-value");
  totalValue.innerText -= updateSubtotal(child);
}

// ITERATION 5

function createProduct() {
  let newProduct = document.querySelector("tfoot")
  //newProduct.addEventListener('click', removeProduct)
  
  let newInput = document.querySelectorAll('.create-product input')
  
  let newTr = document.createElement("tr")
  let newTdNAme = document.createElement("td")
  let newTdPrice = document.createElement("td")
  let newTdQuantity = document.createElement("td")
  let newInputQuantity = document.createElement("input")
  let newTdSubTotal = document.createElement("td")
  let newTdAction = document.createElement("td")
  let newBtnRemove = document.createElement("button")

  newtr.appendChild(newTdNAme)
  newtr.appendChild(newTdPrice)
  newtr.appendChild(newTdQuantity)
  newTdAction.appendChild(newInputQuantity)
  newtr.appendChild(newTdSubTotal)
  newtr.appendChild(newTdAction)
  newTdAction.appendChild(newBtnRemove)

  console.log(newtr)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //select all Remove buttons
  let removeButtons = document.querySelectorAll(".btn.btn-remove")
  removeButtons.forEach(elem => {
    elem.addEventListener('click', removeProduct)
  })

  //select create button
  let createButton = document.getElementById("create");
  createButton.addEventListener('click', createProduct);
  
  
});
