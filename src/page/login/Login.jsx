import { useRef } from "react";
import "./login.scss";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {};

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
            ref={userRef}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
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
