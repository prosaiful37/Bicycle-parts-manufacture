import React from "react";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        <button class="btn btn-xs btn-secondary text-white">Make Admin</button>
      </td>
      <td>
        <button class="btn btn-xs btn-error ">Delete User</button>
      </td>
    </tr>
  );
};

export default UserRow;
