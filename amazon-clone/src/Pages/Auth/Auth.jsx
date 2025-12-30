import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { type } from "../../Utility/actionType";
import Layout from "../../components/LayOut/LayOut";

function Auth() {
  const navigate = useNavigate();
  const [, dispatch] = useContext(DataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔐 SIGN IN
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({
          type: type.SET_USER,
          user: userCredential.user,
        });
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  // 🆕 REGISTER
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({
          type: type.SET_USER,
          user: userCredential.user,
        });
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Layout>
      <div style={{ maxWidth: 400, margin: "40px auto" }}>
        <h2>Sign In</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", marginBottom: 10 }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", marginBottom: 10 }}
          />

          <button onClick={signIn} style={{ width: "100%" }}>
            Sign In
          </button>
        </form>

        <p style={{ marginTop: 20 }}>
          New here?{" "}
          <button onClick={register} style={{ color: "blue" }}>
            Create an account
          </button>
        </p>

        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
}

export default Auth;
