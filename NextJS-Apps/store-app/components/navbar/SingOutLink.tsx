"use client";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

function SignOutLink() {
  const handleSingOut = () => {
    toast("Loged out successfully");
  };

  return (
    <SignOutButton>
      <Link href={"/"} className="w-full text-left" onClick={handleSingOut}>
        Log out
      </Link>
    </SignOutButton>
  );
}

export default SignOutLink;
