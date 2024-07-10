import { createproduct,like } from "./products.js"



// create objects

let req = new XMLHttpRequest()
req.open("GET","productlist.json")
req.send()
req.onload = function() {
       let products = JSON.parse(this.responseText);
       products[0].length=8
            createproduct(document.getElementById("products-show"),products[0])
}
       


// like
like()








     

           








