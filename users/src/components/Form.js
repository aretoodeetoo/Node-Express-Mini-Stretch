import React from 'react';

function Form(props){
    return(
        <form>
            <input 
            type="text"
            name="name"
            value={props.name}
            />
            <input 
            type="text"
            name="bio"
            value={props.bio}
            />
        </form>
    );
}

export default Form;