import { useState } from "react";
import { useForm } from "react-hook-form";

function Auth() {
  const [mode, setMode] = useState("signup");
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="auth-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>
          <form className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-input" type="email" id="email" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input className="form-input" type="password" id="password" />
            </div>

            <button type="submit" className="btn-primary">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>
          {mode === "signup" ? (
            <div className="auth-switch">
              <p>
                Already have an account?{" "}
                <span className="auth-link" onClick={() => setMode("login")}>
                  Login
                </span>
              </p>
            </div>
          ) : (
            <div className="auth-switch">
              <p>
                Dont have an account?
                <span className="auth-link" onClick={() => setMode("signup")}>
                  Sign Up
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
