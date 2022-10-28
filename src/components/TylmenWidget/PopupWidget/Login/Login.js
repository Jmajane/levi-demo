import { useState } from "react";
import "./Login.css";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const LoginState = () => {
  const handleChange = (e) => {
    setFormState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const [formState, setFormState] = useState({ email: "", password: "" });

  return (
    <div className="Login">
      <div className="LoginWrapper">
        <h1>Tylmen</h1>
        <form>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={(e) => handleChange(e)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
        </form>
        <div className="Or">
          <div className="OrLeft"></div>
          <span>or</span>
          <div className="OrRight"></div>
        </div>
        <div className="oAuth">
          <button>
            <FaApple />
            Continue with Apple
          </button>

          <button>
            <FcGoogle />
            Continue with Google
          </button>
        </div>
        <div className="NoAccount">
          <span>Don't have an account?</span>
          <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default LoginState;
