import Currency from "./Currency.js";
function NavBar({currencys}){
    var currencySize= Object.keys(currencys).length
    var currencyNames=Object.keys(currencys)
    
    const allCurrencys=[]
    for (let i = 0; i < currencySize; i++) {
        const product = new Currency( ...currencys[currencyNames[i]]);
        allCurrencys[i]=product
        }
    const selector=allCurrencys.map((currency, i)=>{
       return <option key={i} value={currency.value}>{currency.name}</option>
    })

return(
    <>
    <h1>Happy-Life store</h1>
    <select>
        {selector}
    </select>
    </>
)
}
export default NavBar