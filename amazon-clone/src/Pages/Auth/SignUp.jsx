import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { auth } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const register = async (e) => {
  e.preventDefault();
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
};

  return (
    <div className={styles.auth}>
      <div className={styles.card}>
        <h1>Create Account</h1>

        <form onSubmit={register}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Create your Amazon account</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
