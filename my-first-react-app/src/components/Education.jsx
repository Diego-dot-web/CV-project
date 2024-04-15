import { useState } from 'react';
export default function Education({ isSent }) {
  const [person, setPerson] = useState({ schoolName: '', title: '', date: '' });
  function handleSchool(e, value) {
    e.preventDefault();

    const newPerson = { ...person, schoolName: value };
    setPerson(newPerson);
  }

  function handleTitle(e, value) {
    e.preventDefault();

    const newPerson = { ...person, title: value };
    setPerson(newPerson);
  }

  function handleDate(e, value) {
    e.preventDefault();

    const newPerson = { ...person, date: value };
    setPerson(newPerson);
  }
  if (isSent) {
    return (
      <>
        <h1>School: {person.schoolName}</h1>
        <h2>Title: {person.title}</h2>
        <h2>Date: {person.date}</h2>
      </>
    );
  }

  return (
    <>
      <label>School Name</label>
      <input
        type="text"
        onChange={(e) => {
          handleSchool(e, e.target.value);
        }}
        value={person.schoolName}
      ></input>
      <label>Title of Study</label>
      <input
        type="text"
        onChange={(e) => {
          handleTitle(e, e.target.value);
        }}
        value={person.title}
      ></input>
      <label>Date of Study</label>
      <input
        type="datetime-local"
        onChange={(e) => {
          handleDate(e, e.target.value);
        }}
        value={person.date}
      ></input>
    </>
  );
}
