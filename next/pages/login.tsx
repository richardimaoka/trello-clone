import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import Link from "next/link";
import { useContext, useState } from "react";
import { FirebaseContext } from "../components/FirebaseContext";
import { LoginButton } from "../components/LoginButton";
import { SignUpButton } from "../components/SignupButton";

const login = () => {
  const { auth, googleAuthProvider } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user created:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error: ", error);
        console.log(auth);
        // ..
      });
  };

  const signInWithGoogle = () => {
    console.log("signInWithGoogle: ", auth, googleAuthProvider);
    signInWithPopup(auth, googleAuthProvider)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user created:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error: ", error);
        console.log(auth);
        // ..
      });
  };

  return (
    <div style={{ backgroundColor: "#f9fafc", height: "100vh" }}>
      <div style={{ padding: "40px 0px" }}>
        <img
          style={{ display: "block", width: "200px", margin: "auto" }}
          alt="Trello"
          src="/secret-images/logo.svg"
        />
      </div>
      <div
        style={{
          backgroundColor: "white",
          maxWidth: "400px",
          margin: "0 auto",
          boxShadow: "rgb(0 0 0 / 10%) 0 0 10px",
          padding: "25px 40px",
        }}
      >
        <form>
          <div style={{ marginBottom: "10px" }}>
            <input
              style={{
                width: "100%",
                height: "40px",
                padding: "7px",
                borderRadius: "3px",
                borderWidth: "2px",
                borderColor: "#dfe1e6",
                borderStyle: "solid",
              }}
              placeholder="??????????????????????????????"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              style={{
                width: "100%",
                height: "40px",
                padding: "7px",
                borderRadius: "3px",
                borderWidth: "2px",
                borderColor: "#dfe1e6",
                borderStyle: "solid",
              }}
              type="password"
              placeholder="????????????????????????"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p>
            ????????????????????????????????????????????????
            <Link href="https://google.com">????????????</Link>?????????
            <Link href="https://google.com">??????????????????????????????</Link>
            ??????????????????????????????????????????????????????
          </p>

          <div style={{ marginBottom: "16px" }}>
            <SignUpButton onclick={createUser} />
          </div>

          <p
            style={{
              color: "rgb(94, 108, 132)",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            ?????????
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <LoginButton
              imageUrl="/secret-images/google-logo.svg"
              text="Google?????????"
              onclick={signInWithGoogle}
            />
            <LoginButton
              imageUrl="/secret-images/microsoft-logo.svg"
              text="Microsoft?????????"
            />
            <LoginButton
              imageUrl="/secret-images/apple-logo.svg"
              text="Apple?????????"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
