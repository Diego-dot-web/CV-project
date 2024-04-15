import { useState } from 'react';

export default function GeneralInformation({ isSent }) {
  const [person, setPerson] = useState({
    name: '',
    lastName: '',
    age: '',
    email: '',
    number: '',
  });

  function handleName(e, value) {
    e.preventDefault();

    const newPerson = { ...person, name: value };
    setPerson(newPerson);
  }

  function handleLastName(e, value) {
    e.preventDefault();

    const newPerson = { ...person, lastName: value };
    setPerson(newPerson);
  }

  function handleAge(e, value) {
    e.preventDefault();

    const newPerson = { ...person, age: value };
    setPerson(newPerson);
  }

  function handleEmail(e, value) {
    e.preventDefault();

    const newPerson = { ...person, email: value };
    setPerson(newPerson);
  }

  function handleNumber(e, value) {
    e.preventDefault();

    const newPerson = { ...person, number: value };
    setPerson(newPerson);
  }

  if (isSent) {
    return (
      <>
        <h1>Full Name: {person.name + ' ' + person.lastName}</h1>
        <h2>Age: {person.age}</h2>
        <h2>Email: {person.email}</h2>
        <h2>Number: {person.number}</h2>
      </>
    );
  }
  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => {
            handleName(e, e.target.value);
          }}
          value={person.name}
        ></input>
        <label>LastName</label>
        <input
          type="text"
          onChange={(e) => {
            handleLastName(e, e.target.value);
          }}
          value={person.lastName}
        ></input>
        <label>Age</label>
        <input
          type="number"
          onChange={(e) => {
            handleAge(e, e.target.value);
          }}
          value={person.age}
        ></input>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => {
            handleEmail(e, e.target.value);
          }}
          value={person.email}
        ></input>
        <label>Phone Number</label>
        <input
          type="email"
          onChange={(e) => {
            handleNumber(e, e.target.value);
          }}
          value={person.number}
        ></input>
      </form>
    </div>
  );
}
