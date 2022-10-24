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
    const Form=allProducts.map((product)=>{
        let div=
        <ul>
        <li>{product.name}</li>
        <li>{product.description}</li>
        <li>{product.price}</li>
        <li><img width="100px" src={product.image} alt={product.description}/></li>
        </ul>
    return div
    })
    return Form
}
export default Main