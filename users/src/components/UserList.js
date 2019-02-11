import React from 'react';

function UserList(props){
    return(
        <div>
            {props.users.map(user => (
                <div key={user.id}>
                {user.name}
                {user.bio}
                <button onClick={() => props.deleteUser(user.id)}>Delete This User</button>
                </div>
            ))}
        </div>
    );
}

export default UserList;