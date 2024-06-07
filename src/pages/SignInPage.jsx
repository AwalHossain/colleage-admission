import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => (
  <SignIn path="/sign-in"
  signUpUrl="/sign-up"
  />
);

export default SignInPage;