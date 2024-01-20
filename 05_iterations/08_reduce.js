const myNums = [1, 2, 3];

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "web development course",
    price: 5999,
  },
  {
    itemName: "Data Science course",
    price: 12999,
  },
];

let totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);