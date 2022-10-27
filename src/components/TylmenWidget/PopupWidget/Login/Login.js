import { useState } from "react";

const LoginState = () => {
  const handleChange = (e) => {
    setFormState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const [formState, setFormState] = useState({ email: "", password: "" });

  return (
    <div id="LoginState">
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
        <input type="submit" value="Login" />
      </form>
      <button>Google Login</button>
      <button>Apple Login</button>
      <span>Don't have an account?</span>
      <span>Sign Up</span>
    </div>
  );
};

export default LoginState;
