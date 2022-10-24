import Product from "./Products.js"
function Main({products}){
    var productSize= Object.keys(products).length
    var productNames=Object.keys(products)
    
    const allProducts=[]
    for (let i = 0; i < productSize; i++) {
        const product = new Product( ...products[productNames[i]]);
        allProducts[i]=product
        }
    
    const Form=allProducts.map((product, i)=>{
        let div=
        <div key={i}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <img width="100px" src={product.image} alt={product.description}/>
        </div>;
        i++
    return div
    })
    return Form
}
export default Main