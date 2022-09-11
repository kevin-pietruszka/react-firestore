import "./app.css";
import Home from "./Home";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import Login from "./Login";


function App() {  

  const [user, setUser] = useState({});


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  return (
      <div className="App">
        {user ? ( <Home /> ) : ( <Login /> ) }
      </div>
    );
}

export default App;
