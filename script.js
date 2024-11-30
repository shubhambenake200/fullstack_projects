document.getElementById("category-filter").addEventListener("change",event=>{
    const filtervalue = event.target.value.toLowerCase();
    const products =document.querySelectorAll(".product");

    products.forEach(product=>{
        const category =product.GetAttribute("data-category").toLowerCase();
        if(filterValue=== all || filtervalue === category){ 
        product.style.display ="none";
        }
    });
});

const cart=[];
document.querySelectionAll(".btn-add-to-cart").forEach(button =>{
    button.addEventListener("click",event =>{
        const product = event.target.colsest(".product");
        const productName =product.queryselector(".product-tittle").innerText;

        cart.push(productName);
        alert(`${productName} added to cart!`);
            console.log("cart:", cart);
        });
        });