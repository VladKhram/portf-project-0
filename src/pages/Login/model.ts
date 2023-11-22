import { createEvent, createStore, sample } from "effector";

const testFunc = (data: any) => {
  console.log(data);
};

export const emailChange = createEvent<string>();
export const passwordChange = createEvent<string>();
export const formSubmit = createEvent();

export const $email = createStore("");
export const $password = createStore("");

$email.on(emailChange, (_, email) => email);
$password.on(passwordChange, (_, password) => password);

sample({
  clock: formSubmit,
  source: { email: $email, password: $password },
  fn: (data) => {
    console.log(data);
  },
});
