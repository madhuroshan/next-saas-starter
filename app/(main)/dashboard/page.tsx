"use client";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.firstName}</p>

      <UserButton />

      <SignOutButton>Sign Out</SignOutButton>
    </div>
  );
};

export default Dashboard;
