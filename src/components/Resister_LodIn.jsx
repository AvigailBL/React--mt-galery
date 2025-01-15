  import { useContext, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import MyContext from "../contexst/context";
  import '../css/register.css';

  function Resister_LodIn() {
      const { register } = useContext(MyContext);
      const navigate = useNavigate();

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState({
          name: false,
          email: false,
          password: false
      });

      const handleRegister = () => {
          setError({ name: false, email: false, password: false });
        
          if (!name || !email || !password) {
              setError({
                  name: !name,
                  email: !email,
                  password: !password
              });
              return;
          }

          const newUser = { name, email, password };
          register(newUser);
          navigate("/home");
      };

      return (
          <div className="register-container">
              <div className="register-frame">
                  <div className="content-wrapper">
                      <h1 className="register-title">הצטרפות לגלריה</h1>
                    
                      <div className="welcome-message">
                          ברוכים הבאים לעולם האומנות של לואיס
                      </div>
                    
                      <form className="register-form">
                          <div className="form-field">
                              <input 
                                  type="text" 
                                  className={`styled-input ${error.name ? 'error' : ''}`}
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  placeholder="שם משתמש"
                              />
                          </div>

                          <div className="form-field">
                              <input 
                                  type="email" 
                                  className={`styled-input ${error.email ? 'error' : ''}`}
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="דואר אלקטרוני"
                              />
                          </div>

                          <div className="form-field">
                              <input 
                                  type="password" 
                                  className={`styled-input ${error.password ? 'error' : ''}`}
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  placeholder="סיסמה"
                              />
                          </div>

                          <button 
                              type="button" 
                              className="register-btn"
                              onClick={handleRegister}
                          >
                              הרשמה לגלריה
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      );
  }

  export default Resister_LodIn;
