import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../firebase/firebase.util";

import SignUpForm from "../signUpForm/signUpForm.component";

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={logGoogleUser}>Login with google</button>
      <SignUpForm />
    </div>
  );
};
export default Login;
