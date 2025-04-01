"use client";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

function SingOutLink() {
  const handleSingOut = () => {
    toast("Loged out successfully");
  };

  return (
    <SignOutButton>
      <Link href={"/"} className="w-full text-left" onClick={handleSingOut}>
        Sign Out
      </Link>
    </SignOutButton>
  );
}

export default SingOutLink;
