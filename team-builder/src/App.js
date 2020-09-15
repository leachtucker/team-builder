import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

// let member;
// const { id, name, email, role } = member;

const mockData = [{id: uuid(), name: "John", email: "john@john.com", role: "Backend Engineer"}, {id: uuid(), name: "Allen", email: "allen@allen.com", role: "Frontend Engineer"}, {id: uuid(), name: "Alexa", email: "alexa@alexa.com", role: "Designer"}];


function App() {
  // Slices of State
  const [members, setMembers] = useState();
  const [formValues, setFormValues] = useState();

  // Helpers
  const addMember = (name, email, role) => {
    // Create member object with the data given in the args
    const newMember = {id: uuid(), name: name, email: email, role: role};

    // Error boundary (if _members_ is empty, the spread operator on the last line of this function will crash the site)
    if (!members) {
      setMembers([newMember]);
      return;
    }

    // Insert new member into the state
    setMembers([...members, newMember]);
  }

  // Executes on first render
  useEffect(() => {

  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
