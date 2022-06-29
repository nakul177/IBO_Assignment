// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

function getUniquePrducts(product) {
  let ProductArr = [];
  for (let i = 0; i < product.length; i++) {
    fun(ProductArr, product[i]);
  }

  return ProductArr;
}

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

let result = getUniquePrducts(listOfProducts);
console.log(result);

function fun(ProductArr, curr) {
  let Index = ProductArr.findIndex(
    (item) => item.productName === curr.productName
  );

  if (Index === -1) {
    ProductArr.push(curr);
  } else {
    ProductArr[Index].quantity += curr.quantity;
  }
  return ProductArr;
}
