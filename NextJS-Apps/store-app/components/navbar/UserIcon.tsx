import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  const user = await currentUser();

  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      <img
        src={profileImage}
        alt="user profile"
        className="w-6 h-6 object-cover rounded-full"
      />
    );
  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
