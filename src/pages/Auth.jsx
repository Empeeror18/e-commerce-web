import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const { signUp, user, logout, login } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode == "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <p>User logged in.</p>}
          <h1 className="auth-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <div className="error-msg">{error}</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                {...register("password")}
              />
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
