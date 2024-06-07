import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => (
  <SignUp path="/sign-up" signInUrl="sign-in" />
);

export default SignUpPage;
