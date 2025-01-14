import {   useState } from "react";

import {
    h1ContactUs,
    inputStyle,
    textareaStyle,
    buttonStyle,
    buttonDisabledStyle,
} from "../css/contactUs";

export default function ContactUs() {
    const [msg, setMsg] = useState(""); // ברירת מחדל: מחרוזת ריקה

    function sendMessage() {
        alert("הפניה נשלחה בהצלחה!");
        setMsg(""); // איפוס שדה ההודעה אחרי שליחה
    }

    return (
        <>
            <h1 style={h1ContactUs}>ContactUs</h1>

            <input
                style={inputStyle}
                placeholder="הכנס שם פרטי"
                type="text"
            />
            <input
                style={inputStyle}
                placeholder="הכנס שם משפחה"
                type="text"
            />
            <input
                style={inputStyle}
                placeholder="הכנס כתובת email"
                type="text"
            />

            <p>... נשמח שתכתוב לנו</p>
            <textarea
                style={textareaStyle}
                rows="7"
                cols="35"
                value={msg}
                onChange={(e) => setMsg(e.target.value)} // עדכון ה-state
                placeholder="זהו שדה חובה"
            ></textarea>

            <button
                style={msg.trim() ? buttonStyle : buttonDisabledStyle}
                onClick={sendMessage}
                disabled={!msg.trim()}
            >
                שליחה
            </button>
        </>
    );
}
