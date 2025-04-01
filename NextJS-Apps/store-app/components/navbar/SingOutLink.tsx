"use client";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

function SingOutLink() {
  return (
    <SignOutButton>
      <Link
        href={"/"}
        className="w-full text-left"
        onClick={() => {
          toast("Loged out successfully");
        }}
      >
        Sign Out
      </Link>
    </SignOutButton>
  );
}

export default SingOutLink;
