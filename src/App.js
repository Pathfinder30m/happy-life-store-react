import { useState, useEffect } from 'react';
import './App.css';
import Main from './Main';

function App() {
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
  console.log(products)
  return (
    <>
    <Main products={products}/>
    </>
  );
}

export default App;
