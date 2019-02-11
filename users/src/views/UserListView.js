import React from 'react';
import { connect } from 'react-redux';

import { getUserList, deleteUser } from '../store/actions';

import UserList from '../components/UserList';

class UserListView extends React.Component{

    componentDidMount(){
        this.props.getUserList();
    }

    render(){
        return(
            <div>
                <h2>Look At All Those Chickens</h2>
                <UserList 
                users={this.props.users}
                deleteUser={this.props.deleteUser}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(
    mapStateToProps,
    { getUserList, deleteUser }
)(UserListView);