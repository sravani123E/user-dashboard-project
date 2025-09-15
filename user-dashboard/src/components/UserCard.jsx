import React from 'react';

function UserCard({ user, onClick }) {
  return (
    <div
      className="bg-white shadow rounded p-4 cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <h2 className="font-semibold text-lg">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.company?.name}</p>
    </div>
  );
}

export default UserCard;
