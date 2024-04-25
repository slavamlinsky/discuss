"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();
  if (session.data?.user) {
    return <div>From client: user is signed in</div>;
  }

  return <div>Fro client: user is not signed in</div>;
};

export default Profile;
