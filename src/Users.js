import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [newName, setName] = useState("");
  const [newAge, setAge] = useState(18);

  const getUsers = async () => {
    const data = await getDocs(collection(db, "users"));
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsers()
  }
  
  const createUser = async () => {
    await addDoc(collection(db, "users"), { Name: newName, Age: Number(newAge) });
    getUsers();
  };

  const updateAge = async (userId, update) => {
    const user = doc(db, "users", userId);
    const newAge = {Age: update};
    await updateDoc(user, newAge);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
        <input className="newuserinput" placeholder="Name..." onChange={(event) => {setName(event.target.value)}}/>
        <input placeholder="Age..." onChange={(event) => {setAge(event.target.value)}}/>
        <button onClick={createUser}> Add New User </button>
      {users.map((user) => {
        return (
            <div class="card"> 
                <h1>Name: {user.Name}</h1>
                <h1>Age: {user.Age}</h1>
                <button className="ageChange" onClick={() => {updateAge(user.id, parseInt(user.Age) + 1)}}>
                    Age: +1
                </button>
                <button className="ageChange" onClick={() => {updateAge(user.id, parseInt(user.Age) - 1)}}>
                    Age: -1
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
