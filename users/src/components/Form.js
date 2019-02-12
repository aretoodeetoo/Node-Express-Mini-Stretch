import React from 'react';

function Form(props){
    return(
        <form>
            <input 
            type="text"
            onChange={props.changeHandler}
            name="name"
            value={props.user.name}
            placeholder="Add User Name"
            />
            <input 
            type="text"
            onChange={props.changeHandler}
            name="bio"
            value={props.user.bio}
            placeholder="Add User Bio"
            />
            <button onClick={() => props.addUser()}>Add New User</button>
        </form>
    );
}

export default Form;