const products = [
    { poductId : 1, productName: "p1", price: 300},
    { poductId : 2, productName: "p2", price: 3000},
    { poductId : 3, productName: "p3", price: 200},
    { poductId : 4, productName: "p4", price: 8000},
    { poductId : 5, productName: "p5", price: 500}
]

products.sort((a,b)=>{
    return a.price - b.price
});

console.log( products);