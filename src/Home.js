import Users from "./Users";
import "./Home.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Home = () => {

    const logout = async () => {
        await signOut(auth);
    }

  return (
    <div className="App">
      <div className="welcomeBar">
        Hello and welcome to my list of users in Firebase, pls add your name and
        age.
        <button onClick={logout}> Logout </button>
      </div>

      <div className="users">
        <Users> </Users>
      </div>
    </div>
  );
};

export default Home