import { useState } from "react";
import {
  createAuthUserWithPassword,
  createUserDocumentFromAuth,
} from "../../firebase/firebase.util";

const defaultFormFields = {
  displayName: "",
  id: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, id, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name :</label>
        <input
          required
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label>Id :</label>
        <input
          required
          type="text"
          placeholder="Id"
          onChange={handleChange}
          name="id"
          value={id}
        />
        <label>Email :</label>
        <input
          required
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Password :</label>
        <input
          required
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>Confirm Password :</label>
        <input
          required
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
