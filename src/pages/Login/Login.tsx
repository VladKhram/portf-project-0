import { useUnit } from "effector-react";
import {
  $email,
  $password,
  emailChange,
  formSubmit,
  passwordChange,
} from "./model";

const Login = () => {
  const [email, password] = useUnit([$email, $password]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formSubmit();
        }}
      >
        <input
          type="text"
          value={email}
          onChange={(e) => emailChange(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => passwordChange(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
