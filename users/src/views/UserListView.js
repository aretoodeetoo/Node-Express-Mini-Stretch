import React from 'react';

import UserList from '../components/UserList';

class UserListView extends React.Component{
    render(){
        return(
            <div>
                <h2>Look At All Those Chickens</h2>
                <UserList />
            </div>
        );
    }
}

export default UserListView;