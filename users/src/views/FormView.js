import React from 'react';
import { connect } from 'react-redux';

import { addUser, handleChange } from '../store/actions';

import Form from '../components/Form';

class FormView extends React.Component{
    changeHandler = ev => {
        this.props.handleChange(ev.target.name, ev.target.value)
    };

    addUser = () => {
        const newUser = {
            name: this.props.name,
            bio: this.props.bio
        }
        this.props.addUser(newUser);
    }

    render(){
        return(
            <Form
            addUser={this.addUser}
            changeHandler={this.changeHandler}
            user={this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
    name: state.name,
    bio: state.bio
})

export default connect(
    mapStateToProps,
    { addUser, handleChange }
)(FormView);

