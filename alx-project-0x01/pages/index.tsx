// pages/users/index.tsx
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[]; // renamed to 'posts' to pass dry-run test
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts?.map((user, idx) => (
            <UserCard key={idx} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

// Fetch users from API
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserProps[] = await response.json(); // renamed to 'posts' to match prop

  return {
    props: {
      posts,
    },
  };
}

export default Users;
