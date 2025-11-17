import React from "react";

interface PostCardProps {
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>
    </div>
  );
};

export default PostCard;
