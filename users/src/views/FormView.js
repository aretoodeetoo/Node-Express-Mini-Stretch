import React from 'react';
import { connect } from 'react-redux';

import { addUser } from '../store/actions';

import Form from '../components/Form';

class FormView extends React.Component{

    render(){
        return(
            <Form
            addUser={this.props.addUser}
            />
        );
    }
}

const mapStateToProps = state = ({})

export default connect(
    mapStateToProps,
    { addUser }
)(FormView);

