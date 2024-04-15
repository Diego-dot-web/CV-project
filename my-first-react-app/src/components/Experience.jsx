import { useState } from 'react';

export default function Experience({ isSent }) {
  const [person, setPerson] = useState({
    company: '',
    position: '',
    resposibilities: '',
    since: '',
    until: '',
  });

  function handleCompany(e, value) {
    e.preventDefault();

    const newPerson = { ...person, company: value };
    setPerson(newPerson);
  }

  function handlePosition(e, value) {
    e.preventDefault();

    const newPerson = { ...person, position: value };
    setPerson(newPerson);
  }

  function handleResponsabilities(e, value) {
    e.preventDefault();

    const newPerson = { ...person, responsabilities: value };
    setPerson(newPerson);
  }

  function handleSince(e, value) {
    e.preventDefault();

    const newPerson = { ...person, since: value };
    setPerson(newPerson);
  }

  function handleUntil(e, value) {
    e.preventDefault();

    const newPerson = { ...person, until: value };
    setPerson(newPerson);
  }

  if (isSent) {
    return (
      <>
        <h1>Company: {person.company}</h1>
        <h2>Position: {person.position}</h2>
        <h2>Responsabilities: {person.resposibilities}</h2>
        <h2>
          Date: {person.since} - {person.until}
        </h2>
      </>
    );
  }
  return (
    <>
      <label>Company Name</label>
      <input
        type="text"
        onChange={(e) => {
          handleCompany(e, e.target.value);
        }}
      ></input>
      <label>Position</label>
      <input
        type="text"
        onChange={(e) => {
          handlePosition(e, e.target.value);
        }}
      ></input>
      <label>Responsabilities</label>
      <input
        type="text"
        onChange={(e) => {
          handleResponsabilities(e, e.target.value);
        }}
      ></input>
      <label>Since</label>
      <input
        type="datetime-local"
        onChange={(e) => {
          handleSince(e, e.target.value);
        }}
      ></input>
      <label>Until</label>
      <input
        type="datetime-local"
        onChange={(e) => {
          handleUntil(e, e.target.value);
        }}
      ></input>
    </>
  );
}
