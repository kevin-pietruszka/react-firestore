import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const data = await getDocs(collection(db, "users"));
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsers()
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
            <div class="card">
                <h1>Name: {user.Name}</h1>
                <h1>Age: {user.Age}</h1>
                <button>
                    Age +1
                </button>
                <button>
                    Age -1
                </button>
                <button className="delete" onClick={() => {deleteUser(user.id)}}>
                    Delete User
                </button>
            </div> 
        );
      })}
    </div>
  );
}

export default Users;
