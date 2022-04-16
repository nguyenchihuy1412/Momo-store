import "./register.scss";

export default function Register() {
  const handleRegister = () => {};

  return (
    <div className="registerPage">
      <div className="registerFormWrapper">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
          />
        </form>
        <div className="registerBtnGroup">
          {/* <button className="registerLoginButton" disabled="true">Login</button> */}
          <button className="registerButton" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
