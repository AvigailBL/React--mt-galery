import { useState, } from "react"


export const CreateStore = () => {

    const [users, setUsers] = useState([
        { id: 1, name: "ruti", password: "1234", email: "123@r", rool: "manager" },
        { id: 2, name: "nava", password: "1111", email: "123@n", rool: "manager" },
        { id: 3, name: "tamar", password: "2222", email: "123@t", rool: "user" },
        { id: 4, name: "sara", password: "3333", email: "123@s", rool: "user" }
    ]);
    const [CurrentUser, setCurrentUser] = useState(null);


    const store = {
        users,
        CurrentUser,

        login: (name, password) => {
            const user = users.find(u => u.name == name && u.password == password);
            if (!user) {
                alert("המשתמש לא מחובר")
            }

            else {
                setCurrentUser(user);
                alert("המשתמש חובר בהצלחה")
            }
        },

        register: (newUser) => {
            if (users.includes(u => u.name == newUser.name))
                alert("משתמש זה קיים במערכת")
            else {
                newUser.id = users[users.length - 1].id + 1;
                setUsers([...users, newUser])
                setCurrentUser(newUser);
                alert("!!התחברת בהצלחה")
            }

        }

    }
    return store;
}
