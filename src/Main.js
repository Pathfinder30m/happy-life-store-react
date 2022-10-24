import Product from "./Products.js"
function Main({products}){
    var productSize= Object.keys(products).length
    var productNames=Object.keys(products)
    console.log(productSize);
    const allProducts=[]
    for (let i = 0; i < productSize; i++) {
        const product = new Product( ...products[productNames[i]]);
        allProducts[i]=product
        }
    console.log(allProducts)
    let container=document.querySelector("product")
    const productPage= allProducts.map((product)=>{
        let div = document.createElement("div");
        div.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price}</p>
        `
        return div
        
    })
    container.insertAdjacentHTML("beforeend", productPage);

    
    return(

    
        <>
        <div id="product"></div>
        <p>Hi</p>
        </>
    )
}
export default Main