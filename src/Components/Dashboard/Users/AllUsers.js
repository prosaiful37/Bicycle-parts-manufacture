import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const {
        isLoading,
        error,
        refetch,
        data: users,
      } = useQuery(["users"], () =>
        fetch("http://localhost:5000/users").then((res) => res.json())
      );
    
      if (isLoading) {
        return <Loading></Loading>;
      }
    
      if (error) return "An error has occurred: " + error.message;

    return (
        <div>
             <h2>All-Users: {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Sl/NO</th>
              <th>Email</th>
              <th>Admin Role</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                user={user}
                index={index}
                key={user.id}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllUsers;