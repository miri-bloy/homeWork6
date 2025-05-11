// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // מערך המוצרים 
  const [products, setProducts] = useState([
    { id: 1, name: "ורדים", price: 10, img: "/images/ורדים.jpg" },
    { id: 2, name: "ליליות", price: 20, img: "/images/ליליות.jpg" },
    { id: 3, name: "סחלבים", price: 30, img: "/images/סחלבים.jpg" },
    { id: 4, name: "כלניות", price: 40, img: "/images/כלניות.jpg" },
    { id: 5, name: "נוריות", price: 50, img: "/images/נוריות.jpg" },
    { id: 6, name: "לוע הארי", price: 60, img: "/images/לוע הארי.jpg" }
  ]);

  // 
  const [copyProducts, setCopyProducts]=useState(products);
  // מערך המוצרים בעגלה
  const [ShoppingCart, setShoppingCart] = useState([]);
  //משתנה המקבל את הערך שהוכנס באינפוט של החיפוש
  const [valueSearch, setValueSearch] = useState("");
  //משתנה המקבל את הערך שהוכנס באינפוט של השם
  const [valueName, setValueName] = useState("");
  // משתנה המקבל את הערך שהוכנס באינפוט של המחיר
  const [valuePrice, setvaluePrice] = useState("");
  // משתנה המקבל את סוג המשתמש
  const [user, setUser] = useState("manager");
  // משתנה המקבל את מספר הכפתור עליו לחצו
  const [numFact, setNumFact] = useState(-1);
  // מערך של עובדות מעניינות על פרחים
  const arrFacts = ["הידעת? במאה ה-17 בהולנד, בצלצלי צבעונים מסוימים היו שווים יותר מזהב, והמסחר בהם יצר בועה כלכלית ענקית!",
    "הידעת? ישנם פרחים (כמו סוגים מסוימים של קקטוסים) שפורחים רק בלילה, פותחים את עלי הכותרת שלהם עם השקיעה כדי למשוך מאביקים ליליים כמו עש או עטלפים!",
    "הידעת? פרחים מסוימים אינם רק ליופי - הם גם אכילים ומשמשים במטבח! דוגמאות כוללות פרחי כובע הנזיר, קלנדולה ואפילו סוגים מסוימים של ורדים וסיגליות, המוסיפים צבע וטעם לסלטים וקינוחים."
  ];
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
      price: valuePrice,
      img: "/images/ברירת מחדל.jpg"
    };
    //עדכון מערך המוצרים, כך שיתווסף אליו האובייקט החדש
    setProducts([...products, newProduct]);
    // עדכון המערך שמכיל בפועל את המוצרים שמציגים על המסך
    setCopyProducts(products);
    // ריקון האינפוטים
    setValueName("");
    setvaluePrice("");
  }

  // פונקציה המציגה הודעת סיום
  const ending = () => {
    alert("הזמנתך התקבלה")
    // ריקון העגלה
    setShoppingCart([]);
  }

  // פונקציה המקבלת טקסט לחיפוש
  // ומעדכנת את מערך המוצרים לפי המוצרים העומדים בתנאי החיפוש
  const search=(text)=>{
    setValueSearch(text);
    const filterArr=products.filter(p=> p.name.includes(text));
    setCopyProducts(filterArr);
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

    <div id='box'>
      <div id='boxInput'>
        <input type="text" onChange={(event)=> search(event.target.value)}
       value={valueSearch} placeholder='חיפוש מוצר...' id='search'/>
       <i class="fa-solid fa-magnifying-glass"></i>
       </div>
      <div id="container">
        <div id="products">
          <h2>מוצרים<i class="fa-solid fa-bag-shopping"></i></h2>
          {/* רנדור מערך המוצרים */}
          {copyProducts.map(p =>
            <div className="prod1">
              <h3>{p.name}</h3>
              <h4>מחיר: {p.price} ש"ח</h4>
              <img src={p.img}/>
              <br />
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
            {/* עיצוב מותנה-אם העגלה מלאה-הכפתור של ביצוע הזמנה מקבל רקע אדום */}
            <button onClick={ending} style={{ backgroundColor: ShoppingCart.length > 0 ? "black" : "#00ffe5"}}>בצע הזמנה</button>
          </div>
        </div>
      </div>
      <div id="footer">
        <div id="facts">
          <h2>הידעת?</h2>
          <h3>3 עובדות שעשויות לעניין אתכם</h3>
          <div id="containerFacts">
            <div id="buttons">
              <button className={numFact == 0 ? 'selected' : ''}
               onClick={() => setNumFact(0)}>היסטוריה מרתקת</button>
              <button className={numFact == 1 ? 'selected' : ''}
              onClick={() => setNumFact(1)}>סודות הפריחה</button>
              <button className={numFact == 2 ? 'selected' : ''}
               onClick={() => setNumFact(2)}>שימושים מפתיעים</button>
            </div>
            <button onClick={() => setNumFact(-1)}>ניקוי בחירה</button>
            {/* הצגת עובדה מעניינת-לפי הכפתור עליו המשתמש לחץ */}
            <div id="fact">{numFact != -1 ? arrFacts[numFact] : "בחרו את התחום בו תרצו להעשיר את הידע שלכם..."}</div>
          </div>
        </div>
        <div id="sign_in">
          <h2>כניסת משתמשים</h2>
          <button className={user == "manager" ? 'selected' : ''}
           onClick={() => setUser("manager")}>מנהל</button>
          <button className={user == "user" ? 'selected' : ''}
           onClick={() => setUser("user")}>משתמש</button>
        </div>
        <div>
          {user=="user" && 
          <img src="/images/gif.gif" alt="תיאור התמונה" />}
          
          {/* בדיקה האם האדם הוא מנהל, אם כן-הצגת כל הטופס של הוספת מוצר לאתר */}
          {user == "manager" && <div id="control">
            <h2>הוספת מוצרים לאתר<i class="fa-solid fa-square-plus"></i></h2>
            <input type="text" placeholder="שם מוצר" value={valueName}
              onChange={(event) => { setValueName(event.target.value) }} />
            <input type="text" placeholder="מחיר מוצר" value={valuePrice}
              onChange={(event) => { setvaluePrice(parseInt(event.target.value)) }} />
            <button type="button" onClick={addNewP}>הוסף</button>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;