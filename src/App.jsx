// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // מערך המוצרים 
  const [products, setProducts] = useState([
    { id: 1, name: "aaa", price: 10 },
    { id: 2, name: "aaa", price: 20 },
    { id: 3, name: "aaa", price: 30 },
    { id: 4, name: "aaa", price: 40 },
    { id: 5, name: "aaa", price: 50 },
    { id: 6, name: "aaa", price: 60 },
  ]);

  // מערך המוצרים בעגלה
  const [ShoppingCart, setShoppingCart] = useState([]);

  //פונקצייה המקבלת אובייקט מוצר ומוסיפה אותו למערך המוצרים של העגלה
  const addP = (product) => {
    //עדכון מערךל מוצרי העגלה-כך שיהיה שווה לתוכן שלו + האובייקט שנוסף
    setShoppingCart([...ShoppingCart, product]);
  }
  
  //פונקציה המקבלת אובייקט מוצר ומוחקת אותו ממערך מוצרי העגלה
  const removeP = (product) => {
    //ID מציאת המיקום של האובייקט במערך מוצרי העגלה על פי ה
    const index = ShoppingCart.findIndex(p => p.id == product.id);
    //העתקת תוכן המערך למשתנה זמני
    const temp = [...ShoppingCart];
    //מחיקת האובייקט הנבחר מהמשתנה הזמני לפי המיקום שלו
    temp.splice(index, 1)
    //העתקת תוכן המשתנה הזמני חזרה למערך מוצרי העגלה
    setShoppingCart([...temp])
  }

  return (

    <div>
      <div id="container">
        <div id="products">
          <h2>מוצרים<i class="fa-solid fa-bag-shopping"></i></h2>
          {products.map(p =>
            <div className="prod1">
              <h3>{p.name}</h3>
              <h4>{p.price}</h4>
              <button onClick={() => addP(p)}>הוסף לסל</button>
            </div>)}
        </div>

        <div id="ShoppingCart">
          <h2>עגלת קניות<i class="fa-solid fa-cart-shopping"></i></h2>
          {ShoppingCart.map(p =>
            <div className="prod2">
              <h5>{p.name}</h5>
              <h5>{p.price}</h5>
              <button onClick={() => removeP(p)}>הסר מהעגלה</button>
            </div>)}
        </div>
      </div>

      <div id="control">
        <h2>הוספת מוצרים לאתר<i class="fa-solid fa-square-plus"></i></h2>
        <input type="text" placeholder="שם מוצר" />
        <input type="text" placeholder="מחיר מוצר" />
        <button type="button">הוסף</button>
      </div>
    </div>
  );
}

export default App;
