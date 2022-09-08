import { useEffect, useState } from "react"

const UseUser = user => {
    const [users, setUsers] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then(res => res.json())
        .then(data => {
            console.log('data iside add ', data);
        })
        

    },[user])
    return [users];


}

export default UseUser;