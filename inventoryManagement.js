// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"]
function logFirstProduct() {
  console.log (products[0])
}

//adding products
function addProduct(){
  products.push("Tablet")
  console.log (products)
}

//update product name
function updateProductName (){
  products[0]="TelePhone"
  console.log(students)
}

//removeproducts
function removeLastProduct(){
  products.splice("TelePhone");
  console.log(students)
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
