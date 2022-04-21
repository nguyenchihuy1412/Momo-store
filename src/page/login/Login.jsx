import { useEffect, useRef, useState } from "react";
import "./login.scss";

export default function Login({ user }) {
  const userRef = useRef();
  const passwordRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.toLowerCase() === "momo" && password === "momo") {
      user.setUser(true);
      alert("User Login Successfully");
    } else {
      alert("Missing username or password");
    }
  };
  useEffect(() => {
    alert("Please add username = momo & password = momo to login");
  }, []);

  return (
    <div className="loginPage">
      <div className="loginFormWrapper">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Username</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
            ref={userRef}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
        </form>
        <div className="loginBtnGroup">
          <button className="loginButton" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
