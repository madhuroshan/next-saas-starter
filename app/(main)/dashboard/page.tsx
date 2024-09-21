"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    redirect("/sign-in");
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.firstName}</p>

      <SignOutButton>Sign Out</SignOutButton>
    </div>
  );
};

export default Dashboard;
