// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  
  // מערך המוצרים 
  const [products, setProducts]=useState([
    {id:1, name:"aaa", price:10},
    {id:2, name:"aaa", price:20},
    {id:3, name:"aaa", price:30},
    {id:4, name:"aaa", price:40},
    {id:5, name:"aaa", price:50},
    {id:6, name:"aaa", price:60},
  ]);

  // מערך המוצרים בעגלה
  const [ShoppingCart, setShoppingCart]=useState([]);

  function addP(){
    alert("הפריט נוסף בהצלחה")
  }

  function removeP(){
    alert("הפריט הוסר בהצלחה")
  }
  
  return (
    <div id="container">
      
      <div id="products">
        <h2>מוצרים</h2>
      {products.map( p =>
        <div className="prod1">
          <h3>{p.name}</h3>
          <h4>{p.price}</h4>
          <button onClick={addP}>הוסף לסל</button>
        </div>)}
      </div>

      <div id="ShoppingCart">
        <h2>עגלת קניות</h2>
        {ShoppingCart.map( p =>
        <div className="prod2">
          <h5>{p.name}</h5>
          <h6>{p.price}</h6>
          <button onClick={removeP}>הסר</button>
        </div>)}
      </div>

      <div id="control">
        <h2>הוספת מוצרים לאתר</h2>
        <input type="text" placeholder="שם מוצר"/>
        <input type="text" placeholder="מחיר מוצר"/>
        <button type="button">הוסף</button>
      </div>

    </div>
  );
}

export default App;
