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
                        Role: <br />
                        <select name="role" value={formValues.role} onChange={(evt) => {onChange(evt)}}>
                            <option value="">---Select Role---</option>
                            <option value="Project Lead">Project Lead</option>
                            <option value="Backend Engineer">Backend Engineer</option>
                            <option value="Frontend Engineer">Frontend Engineer</option>
                            <option value="Designer">Designer</option>
                        </select>
                    </label>
                </div>
                <Button onClick={onSubmit}>Submit</Button>
            </form>
        </div>

    );
}

export default Form;