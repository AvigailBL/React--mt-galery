import {  useContext, useState } from "react";
import MyContext from "../contexst/context";
import {   Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";  // ייבוא useNavigate


function Connections(){

const {  login } = useContext(MyContext); // שימוש ב-context בצורה מסודרת
const user=useContext(MyContext).CurrentUser
const navigate = useNavigate();  // יצירת פונקציה לנווט לדף

const [name, setName] = useState("");
const [password, setPassword] = useState("");

const Login=()=>{
login(name,password)
navigate("/home");  // הנתיב לדף הבית שלך (תעדכן את זה לפי הצורך)

}
return <>
<p>{user==null?"התחבר לאתר":user.name+ "שלום ל"}</p>
<h1>התחברות</h1>
<form>
<p>:שם המשתמש</p>
 <input type="text" onChange={e=>{setName(e.target.value)}}></input>
  <p>:סיסמה</p>
  <input type="password" onChange={e=>{setPassword(e.target.value)}}></input>

  
</form>
<button onClick={()=>{Login()}}>התחברות</button>
<br></br>
<p>yafit help to ben lulu</p>
<Link to={"/Resister_LodIn"}>להרשמה</Link>

  </>
}





export default Connections;

 



