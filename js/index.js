// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  
  // extracting values from DOM element
  let priceNum = price.innerText;
  let quantityNum = Number(quantity.value);

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
  //newProduct.addEventListener('click', removeProduct)
  let productNameDOM = document.querySelector('.create-product input[type="text"]')
  let quantityDOM = document.querySelector('.create-product input[type="number"]')

  //Create variable tbody
  let tbodyDOM = document.querySelector('tbody')

  //Create Tr DOM
  let trDOM = document.createElement('tr')
  trDOM.classList.add('product')

  //Insert innerHTML between `` !!
  trDOM.innerHTML = `
  <td class="name">
            <span>${productNameDOM.value}</span>
          </td>
          <td class="price">$<span>${quantityDOM.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `
  let removeBtn = trDOM.querySelector('.btn-remove')
  removeBtn.addEventListener('click', removeProduct)

  // append it to our tbody
  tbodyDOM.appendChild(trDOM)
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
