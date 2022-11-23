const URL = "https://jsonplaceholder.typicode.com/posts";
fetch(URL)
.then((response)=>{
console.log(response.json())
})