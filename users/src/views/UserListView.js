import React from 'react';
import { connect } from 'react-redux';

import { getUserList, deleteUser } from '../store/actions';

import UserList from '../components/UserList';

class UserListView extends React.Component{

    componentDidMount(){
        console.log('state', this.props.state);
        this.props.getUserList();
    }

    render(){
        return(
                <UserList 
                users={this.props.users}
                deleteUser={this.props.deleteUser}
                />
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