const userCart = [
{productId : 1 , productName : "mobile" , price : 12000 },
{productId : 2 , productName : "laptop" , price : 22000 },
{productId : 3 , productName : "tv" , price : 15000 }
]

const totalPrice = userCart.reduce(function(accumulator,currentvalue){
return accumulator + currentvalue.price
},0)

console.log(totalPrice);
