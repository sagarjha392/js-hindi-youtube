const desc = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(desc);
// Object.defineProperty(Math, "PI", {
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
// console.log(desc);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("chai nhi bni");
  },
};

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true,
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    // console.log(`${key}: ${value}`);
  }
}
