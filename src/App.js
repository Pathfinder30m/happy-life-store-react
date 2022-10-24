import { useState, useEffect } from 'react';
import './App.css';
import Main from './Main';
import NavBar from './Navbar';

function App() {
  //fetch product list
  const [products,setProducts]=useState([]);
  const getProducts=()=>{
    fetch('products.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setProducts(myJson)
      });
  }
  useEffect(()=>{
    getProducts()
  },[])
  //fetch currency list
  const [currencys,setCurrencys]=useState([]);
  const getCurrencys=()=>{
    fetch('currency.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setCurrencys(myJson)
      });
  }
  useEffect(()=>{
    getCurrencys()
  },[])
  return (
    <>
    <NavBar
      currencys={currencys}/>
    <Main 
      products={products}
      currencys={currencys}/>

    </>
  );
}

export default App;
