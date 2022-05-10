import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.scss";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState("");
  const [paswd, setPaswd] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, paswd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setErr(true);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPaswd(e.target.value)}
        />
        <button type="submit">Login</button>
        {err && <span>Sai email hoặc mật khẩu</span>}
      </form>
    </div>
  );
};
