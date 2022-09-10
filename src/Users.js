import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {db} from "./firebase";
import "./Users.css"

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const getUsers = async () => {
          const data = await getDocs(collection(db, "users"));
          console.log(data);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, []);

    return (
        <div>
            {users.map((user) => {
                return (
                    <div class="card">
                        {" "}
                        <div class="container">
                            <h1>Name: {user.Name}</h1>
                            <h1>Age: {user.Age}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
        
    );
}


export default Users;