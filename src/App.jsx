// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  // אתחול משתנים לחישוב כמויות התורמים, והסכומים
  const [donors, setDonors] = useState(1681)
  const [amountRaised, setAmountRaised] = useState(1132700)
  let targetAmount = 1500000
  // משתנה סטייט השומר את סכום התרומה שהמשתמש הכניס
  const [value, setValue] = useState(0)
  // פונקציה המופעלת בכל פעם שהמשתמש משנה את הערך שנמצא בתיבת הקלט של סכום התרומה
  function save_value(event) {
    //   עדכון המשתנה-ע"י הצבת הערך של האלמנט שגרם לאירוע-במקרה שלנו-האינפוט
    setValue(event.currentTarget.value)
  }
  // משתנה סטייט השומר את שם התורם שהמשתמש הכניס
  const [name, setName] = useState("")
  // פונקציה המופעלת בכל פעם שהמשתמש משנה את שדה הקלט של השם לתפילה
  function save_name(event) {
    // עדכון המשתנה-ע"י הצבת הערך של האלמנט שגרם לאירוע-במקרה שלנו-האינפוט
    setName(event.currentTarget.value)
    // הדפסת השם לאחר ההעדכון
    // %%%%%%%%%%%%%%%%%%%%%%%כאן אני רואה שהוא לא מעודכן נכון%%%%%%%%%%%%%%%%%
    console.log(name)
  }
  // מערך סטייט השומר את שמות התורמים לתפילה
  const [donor, setDonor] = useState([])
  // פונקציה המופעלת ע"י לחיצה על כפתור האישור
  // הפונקציה מעדכנת את הכמויות הנכונות-לפי מה שהמשתמש מכניס
  function displayUptate() {
    // עדכון כמות התורמים-תורם אחד יותר
    setDonors(donors + 1)
    // עדכון הסכום שגויס כבר-ע"י הוספת הסכום שהמשתמש תרם 
    setAmountRaised(amountRaised + parseInt(value))
    // יצירת משתנה זמני המקבל את תוכן המערך
    const newDonor = [...donor]
    // הוספת שם למערך הזמני
    newDonor.push(name)
    // עדכון המערך המקורי-ושליחת המערך הזמני במקומו
    setDonor(newDonor)
    // הדפסת המערך המקורי לאחר ההעדכון
    // %%%%%%%%%%%%%%%%%%%%%%%כאן אני רואה שהוא לא מעודכן נכון%%%%%%%%%%%%%%%%%
    console.log(donor);

    // ========================שינוי עיצוב=========================
    // מכאן והלאה-הוספת קלאס לכמה שניות לדיבים שהתוכן שלהם השתנה-לצורך הפעלת האנימציה שעל הקלאס
    // חיפוש שתי הדיבים הצדדיים-שאין להם איידי
    let all = document.querySelectorAll('.item-art:not([id]) h2');
    // הוספת קלאס מיוחד ל2 האלמנטים -לצורך הפעלת אנימציה
    all[0].classList.add('change');
    all[1].classList.add('change');
    // הסרת הקלאס מהאלמנטים לאחר 2 שניות
    setTimeout(() => {
      all[0].classList.remove('change');
      all[1].classList.remove('change');
    }, 2000);
  }
  return (
    <div id="container">
      <header>
        <h1>ברכותינו! אם הגעת לכאן-סימן שהינך רוצה להיות שותף בהצלת חיים</h1>
      </header>
      <article>
        <div className="item-art">
          <i class="fa-solid fa-users"></i><br />
          <h2>{donors}</h2>
          <h4>תורמים</h4>
        </div>
        <div className="item-art" id="middle">
          <i class="fa-solid fa-trophy"></i>
          <h2>{targetAmount}</h2>
          <h4>יעד הגיוס</h4>
        </div>
        <div className="item-art">
          <i class="fa-solid fa-arrow-trend-up"></i>
          <h2>{amountRaised}</h2>
          <h4>סכום שכבר גויס</h4>
        </div>
      </article>
      <aside>
        <i class="fa-solid fa-arrow-down"></i>
        <span>הצטרף להתרמה ב 4 צעדים פשוטים:</span>
        <i class="fa-solid fa-arrow-down"></i>
      </aside>
      <footer>
        <div className="item-foot">
          <p>הכנס את שמך</p>
          <input placeholder="למשל: ישראל ישראלי..." />
        </div>
        <div className="item-foot">
          <p>הכנס סכום לתרומה</p>
          <input placeholder="למשל: 18000..." onChange={save_value} />
        </div>
        <div className="item-foot">
          <p>הכנס שם לתפילה</p>
          <input placeholder="למשל: ישראל בן ישראלה..." onChange={save_name} /* {value={name}} */ />
        </div>
        <div className="item-foot">
          <p>לחץ על אישור</p>
          <button onClick={displayUptate}>אישור</button>
        </div>
      </footer>
      <section>
      <div id="donors">
          <details>
            <summary>שמות התורמים לתפילה</summary>
            <ul>
              {donor.map(a => <li>{a}</li>)}
            </ul>
          </details>
        </div>
      </section>
    </div>
  );
}

export default App;
