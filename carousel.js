import {createproduct,like } from "./products.js";
let req = new XMLHttpRequest()
req.open("GET","productlist.json")
req.send()
req.onload = function() {
       let products = JSON.parse(this.responseText);
       for (let index = 0; index < products.length; index++) {
        let jsproduct = document.getElementsByClassName("productjs")[index];
            createproduct(jsproduct,products[index])
    }
}

like()