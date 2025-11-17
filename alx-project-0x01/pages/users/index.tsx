import React from "react";
import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Users Page</h1>
        <p>List of users will go here.</p>
      </main>
    </div>
  );
};

export default Users;
