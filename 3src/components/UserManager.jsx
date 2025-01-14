import { useContext } from "react";
import MyContext from "../contexst/context";

function UserManager(){

    const {users}=useContext(MyContext)
    return<>
    <p>ניהול משתמשים</p>
    <ul>
   { users&& users.map(u=> <li>{u.name} |{u.email}</li>)}

    </ul>
    </>
}
export default UserManager;