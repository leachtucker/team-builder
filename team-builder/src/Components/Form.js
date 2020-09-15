import React from 'react';
import styled from 'styled-components';

function Form({ updateFormValues, formValues, addMember }) {

    const onChange = (evt) => {
        updateFormValues(evt.target.name, evt.target.value);
    }

    const onSubmit = () => {
        addMember(formValues.name, formValues.email, formValues.role);
    }

    const H3 = styled.h3`
        margin-top: 2%;
    `;

    const Button = styled.button`
        margin-top: 2%;
        padding: 1% 2%;
        background-color: cornflowerblue;
        border: none;
        border-radius: 7px;
        color: white;
        font-family: sans-serif;
        font-weight: 600;
    `;

    return (
        <div>
            <H3>Add New Member</H3>
            <form>
                <div className="container">
                    <label>
                        Name: <input type="text" placeholder="Name" name="name" value={formValues.name} maxLength={30} onChange={(evt) => {onChange(evt)}} />
                    </label>
                    <label>
                        Email: <input type="email" placeholder="Email" name="email" value={formValues.email} maxLength={30} onChange={(evt) => {onChange(evt)}} />
                    </label>
                    <label>
                        Role: <input type="text" placeholder="Role" name="role" value={formValues.role} maxLength={30} onChange={(evt) => {onChange(evt)}} />
                    </label>
                </div>
                <Button onClick={onSubmit}>Submit</Button>
            </form>
        </div>

    );
}

export default Form;