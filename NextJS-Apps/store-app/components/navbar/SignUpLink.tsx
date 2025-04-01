import { SignUpButton } from "@clerk/nextjs";
import React from "react";

function SignUpLink() {
  return (
    <SignUpButton mode="modal">
      <button className="w-full">Register</button>
    </SignUpButton>
  );
}

export default SignUpLink;
