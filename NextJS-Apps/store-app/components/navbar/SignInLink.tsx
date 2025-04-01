import { SignInButton } from "@clerk/nextjs";

function SignInLink() {
  return (
    <SignInButton mode="modal">
      <button className="w-full">Log In</button>
    </SignInButton>
  );
}

export default SignInLink;
