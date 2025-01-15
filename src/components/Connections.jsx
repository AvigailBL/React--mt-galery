import { useContext, useState } from "react";
import MyContext from "../contexst/context";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../css/connections.css';

function Connections() {
    const { login } = useContext(MyContext);
    const user = useContext(MyContext).CurrentUser;
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const Login = () => {
        login(name, password);
        navigate("/home");
    }

    return (
        <div className="gallery-login">
            <div className="art-frame">
                <div className="content-wrapper">
                    <h1 className="gallery-name">הגלריה של לואיס</h1>
                    
                    <div className="welcome-text">
                        {user == null ? 
                            <span className="fade-in">ברוכים הבאים לעולם האומנות של לואיס</span> : 
                            <span className="fade-in">{`${user.name} שמחים לראותך`}</span>
                        }
                    </div>
                    
                    <form className="login-form">
                        <div className="form-field">
                            <input 
                                type="text" 
                                className="styled-input"
                                onChange={e => setName(e.target.value)}
                                placeholder="שם משתמש"
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                type="password" 
                                className="styled-input"
                                onChange={e => setPassword(e.target.value)}
                                placeholder="סיסמה"
                            />
                        </div>

                        <button 
                            type="button" 
                            className="enter-btn"
                            onClick={Login}
                        >
                            כניסה לגלריה
                        </button>
                    </form>

                    <div className="register-option">
                        <Link to="/Resister_LodIn" className="register-btn">
להרשמה                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connections;