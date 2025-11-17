// components/common/UserCard.tsx
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name} ({username})</h2>
      <p className="text-gray-600 mb-2"><strong>Email:</strong> {email}</p>
      <p className="text-gray-600 mb-2"><strong>Phone:</strong> {phone}</p>
      <p className="text-gray-600 mb-2"><strong>Website:</strong> {website}</p>
      <p className="text-gray-600 mb-2">
        <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
      <p className="text-gray-600">
        <strong>Company:</strong> {company.name} — `{company.catchPhrase}
      </p>
    </div>
  );
};

export default UserCard;
