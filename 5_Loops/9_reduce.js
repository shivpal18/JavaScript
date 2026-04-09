const myNums = [1,2,3,4]
// const mytotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const mytotal = myNums.reduce( (acc, curr) => acc+curr, 0 )

// console.log(mytotal);


const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "PY course",
        price: 999
    },
    {
        itemName: "AI course",
        price: 5999
    },
    {
        itemName: "DS course",
        price: 7999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
