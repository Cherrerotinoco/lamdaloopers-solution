const ticket = [
  { product: "water", type: "drinks", quantity: 10, unitPrice: 1 },
  { product: "chicken wings", type: "food", quantity: 3, unitPrice: 5 },
  { product: "steak", type: "food", quantity: 1, unitPrice: 9 },
  { product: "coffee", type: "drinks", quantity: 4, unitPrice: 2 },
  { product: "wine bottle", type: "drinks", quantity: 1, unitPrice: 7 },
];

const productWithTotal = ticket.map(item => {
  item.totalPrice = item.quantity * item.unitPrice
  return item
})

const getTotal = productWithTotal.map(item => item.totalPrice).reduce((acc, curr) => acc + curr, 0) 

// Print the results
console.log('Uds.', 'Producto', 'Precio', 'Importe')
productWithTotal.map(item => console.log(item.quantity, item.product, item.unitPrice, item.totalPrice))
console.log('Total', getTotal)