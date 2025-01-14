import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";  // ייבוא useNavigate
import MyContext from "../contexst/context";

function Resister_LodIn() {
    const { register } = useContext(MyContext);
    const navigate = useNavigate();  // יצירת פונקציה לנווט לדף

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        name: false,
        email: false,
        password: false
    });

    const handleRegister = () => {
        // אתחול שגיאות
        setError({ name: false, email: false, password: false });

        // בדיקת תקינות אם השדות לא ריקים
        if (!name || !email || !password) {
            setError({
                name: !name,
                email: !email,
                password: !password
            });
            return;  // אם אחד השדות ריק, לא נבצע את ההרשמה
        }

        const newUser = { name, email, password };
        
        register(newUser);  // הרשמה

        // אם ההרשמה הצליחה, נעביר את המשתמש לדף הבית
        navigate("/home");  // הנתיב לדף הבית שלך (תעדכן את זה לפי הצורך)
    };

    return (
        <>
            <h2>הרשמה</h2>
            <p>:הכנס שם משתמש</p>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                style={{ borderColor: error.name ? 'red' : '' }} // הדגשה אם יש שגיאה
            />

            <p>:הכנס כתובת אמייל</p>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                style={{ borderColor: error.email ? 'red' : '' }} // הדגשה אם יש שגיאה
            />

            <p>הכנס סיסמה</p>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                style={{ borderColor: error.password ? 'red' : '' }} // הדגשה אם יש שגיאה
            />

            <br />
            <button onClick={handleRegister}>להתחברות</button>
        </>
    );
}

export default Resister_LodIn;
