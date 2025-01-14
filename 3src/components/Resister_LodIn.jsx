import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";  // ייבוא useNavigate
import MyContext from "../contexst/context";

function Resister_LodIn() {
    const { register } = useContext(MyContext);
    const navigate = useNavigate();  // יצירת פונקציה לנווט לדף

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        const newUser = {name,email, password,  // אתה יכול לשנות את זה לפי הצורך
        };
        
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
            />

            <p>:הכנס כתובת אמייל</p>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />

            <p>הכנס סיסמה</p>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />

            <br />
            <button onClick={handleRegister}>להתחברות</button>
        </>
    );
}

export default Resister_LodIn;
