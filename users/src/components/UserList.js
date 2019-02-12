import React from 'react';

function UserList(props){
    console.log(props);
    return(
        <div>
            {props.users.map(user => (
                <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.bio}</p>
                <button onClick={() => props.deleteUser(user.id)}>Delete This User</button>
                </div>
            ))}
        </div>
    );
}

export default UserList;