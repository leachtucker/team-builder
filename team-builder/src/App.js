import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Member from './Components/Member';
import './App.css';
import Form from './Components/Form';

const mockData = [{id: uuid(), name: "John", email: "john@john.com", role: "Backend Engineer"}, {id: uuid(), name: "Allen", email: "allen@allen.com", role: "Frontend Engineer"}, {id: uuid(), name: "Alexa", email: "alexa@alexa.com", role: "Designer"}];

const initialFormValues = {
  name: "",
  email: "",
  role: ""
};


function App() {
  // Slices of State
  const [members, setMembers] = useState(mockData);
  const [formValues, setFormValues] = useState(initialFormValues);

  // Helpers
  const addMember = (name, email, role) => {
    // Create member object with the data given in the args
    const newMember = {id: uuid(), name: name.trim(), email: email.trim(), role: role};

    // Check user input
    if (!newMember.name || !newMember.email || !newMember.role) {
      return;
    }

    // Error boundary (if _members_ is empty, the spread operator on the last line of this function will crash the site)
    if (!members) {
      setMembers([newMember]);
      return;
    }

    // Insert new member into the state
    setMembers([...members, newMember]);

    // After that, reset the formValues state.
    setFormValues(initialFormValues);
  }

  const updateFormValues = (inputName, inputValue) => {
    // Insert new value object into the state
    setFormValues( {...formValues, [inputName] : inputValue} );
  }

  // Executes on first render
  useEffect(() => {
    console.log(formValues);
  }, []);

  if (!members) {
    return (
      <h2>Fetching Data...</h2>
    );
  }

  return (
    <div className="App">
      <h1>The Team</h1>
      <div className="container">
        {
          members.map(member => {
            return (<Member member={member} key={member.id}></Member>);
          })
        }
      </div>
      {/* Form goes here */}
        <Form updateFormValues={updateFormValues} formValues={formValues} addMember={addMember}/>
    </div>
  );
}

export default App;