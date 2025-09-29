import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition bg-white">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">@{username}</p>
      <p className="mt-2 text-gray-700">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Phone:</span> {phone}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Website:</span> {website}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Company:</span> {company?.name}
      </p>
    </div>
  );
};

export default UserCard;
