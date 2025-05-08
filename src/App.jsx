// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // מערך המוצרים 
  const [products, setProducts] = useState([
    { id: 1, name: "ורדים ", price: 10 },
    { id: 2, name: "ליליות ", price: 20 },
    { id: 3, name: "סחלבים", price: 30 },
    { id: 4, name: "כלניות ", price: 40 },
    { id: 5, name: "נוריות", price: 50 },
    { id: 6, name: "לוע הארי", price: 60 }
  ]);

  // מערך המוצרים בעגלה
  const [ShoppingCart, setShoppingCart] = useState([]);
  //משתנה המקבל את הערך שהוכנס באינפוט של השם
  const [valueName, setValueName] = useState("");
  // משתנה המקבל את הערך שהוכנס באינפוט של המחיר
  const [valuePrice, setvaluePrice] = useState("");

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
    temp.splice(index, 1);
    //העתקת תוכן המשתנה הזמני חזרה למערך מוצרי העגלה
    setShoppingCart([...temp]);
  }

  //פונקציה היוצרת אובייקטו חדש עם הפרטים שהתקבלו ומוסיפה אותו למערך המוצרים
  const addNewP = () => {
    //יצירת אובייקט חדש המקבל את הערכים שהוכנסו באינפוט
    const newProduct = {
      id: products[products.length - 1].id + 1,
      name: valueName,
      price: valuePrice
    };
    //עדכון מערך המוצרים, כך שיתווסף אליו האובייקט החדש
    setProducts([...products, newProduct]);
    // ריקון האינפוטים
    setValueName("");
    setvaluePrice("");
  }

  // פונקציה המציגה הודעת סיום
  const ending = () => {
    alert("הזמנתך התקבלה")
  }

  // משתנה השומר את כמות המוצרים בעגלה
  const countProducts = ShoppingCart.length;
  // משתנה השומר את המחיר הסופי לתשלום
  let amountPay = 0;
  //מעבר בלולאה על כל פריטי העגלה
  for (let index = 0; index < ShoppingCart.length; index++) {
    //עדכון משתנה הצבירה
    amountPay += ShoppingCart[index].price;
  }

  return (

    <div>
      <div id="container">
        <div id="products">
          <h2>מוצרים<i class="fa-solid fa-bag-shopping"></i></h2>
          {/* רנדור מערך המוצרים */}
          {products.map(p =>
            <div className="prod1">
              <h3>{p.name}</h3>
              <h4>מחיר: {p.price} ש"ח</h4>
              <button onClick={() => addP(p)}>הוסף לסל</button>
            </div>)}
        </div>

        <div id="ShoppingCart">
          <h2>עגלת קניות<i class="fa-solid fa-cart-shopping"></i></h2>
          {/* רנדור מערך המוצרים שבעגלה */}
          {ShoppingCart.map(p =>
            <div className="prod2">
              <h5>{p.name}</h5>
              <h5>{p.price} ש"ח</h5>
              <button onClick={() => removeP(p)}>הסר מהעגלה</button>
            </div>)}
          <div id="end">
            <h6>מספר מוצרים: {countProducts}</h6>
            <h6>סכום לתשלום: {amountPay}</h6>
            <button onClick={ending}>בצע הזמנה</button>
          </div>
        </div>
      </div>

      <div id="control">
        <h2>הוספת מוצרים לאתר<i class="fa-solid fa-square-plus"></i></h2>
        <input type="text" placeholder="שם מוצר" value={valueName}
          onChange={(event) => { setValueName(event.target.value) }} />
        <input type="text" placeholder="מחיר מוצר" value={valuePrice}
          onChange={(event) => { setvaluePrice(parseInt(event.target.value)) }} />
        <button type="button" onClick={addNewP}>הוסף</button>
      </div>
    </div>
  );
}

export default App;
