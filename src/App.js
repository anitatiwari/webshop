import {useState,useEffect} from 'react'
import Header from "./components/Header";
import ProductList from './components/ProductList';
import BasketContainer from './components/BasketContainer';
import Back from "./components/Back"


function App() {

const [products,setProducts]=useState([]);
const [basket,setBasket]=useState([]);

useEffect(()=>{
  async function getProducts(){
    const res =await fetch ("https://kea-alt-del.dk/t7/api/products");
    const data =await res.json();
    setProducts(data);
  }
getProducts();
},[])


  return (
    <div className="App">
     <Header />
    <Back/>
     <div className='product grid-cols-1 md:flex gap-5 '>
     <ProductList className="shrink " products={products} setBasket={setBasket}/>
     <BasketContainer className=""  setBasket={setBasket} basket={basket}/>
     </div>
    </div>
  );
}

export default App;
