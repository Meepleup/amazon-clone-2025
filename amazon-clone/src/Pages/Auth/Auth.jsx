import React, { useState, useContext } from "react";
import styles from "./Auth.module.css";
import { auth } from "../../Utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { type } from "../../Utility/actionType";
import { useNavigate, Link } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch({
        type: type.SET_USER,
        user: userAuth.user,
      });
      navigate("/");
    });
  };

  return (
    <div className={styles.auth}>
      <div className={styles.card}>
        <h1>Sign In</h1>

        <form onSubmit={signIn}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        <p className={styles.divider}>New to Amazon?</p>

        <Link to="/signup" className={styles.createAccount}>
          Create your Amazon account
        </Link>
      </div>
    </div>
  );
}

export default Auth;
