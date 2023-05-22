/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./userCreation.module.css";

const UserCreation = (props) => {
  // states
  const [name, changeName] = useState("");
  const [age, changeAge] = useState("");

  // name changing func
  const nameChanging = (event) => {
    changeName(event.target.value);
  };

  // age changing func
  const ageChanging = (event) => {
    changeAge(event.target.value);
  };

  const validInfoImport = (event) => {
    event.preventDefault();
    if (name.trim().length > 0 && age.length > 0) {
      props.validInfo({ name: name, age: age, id: Math.random().toString() });
    } else if (name.trim().length === 0 && age.length > 0) {
      props.errType("name");
      props.modalState();
    } else if (name.trim().length > 0 && age.length === 0) {
      props.errType("age");
      props.modalState();
    } else {
      props.errType("name and age");
      props.modalState();
    }

    changeName("");
    changeAge("");
  };

  return (
    <form onSubmit={validInfoImport} className={styles.validBox}>
      <div className={styles.infoBox}>
        <h3 className={styles.validText}>Name</h3>
        <input
          value={name}
          className={styles.validInput}
          onChange={nameChanging}
          type="text"
        />
      </div>
      <div className={styles.infoBox}>
        <h3 className={styles.validText}>Age</h3>
        <input
          value={age}
          onChange={ageChanging}
          className={styles.validInput}
          type="number"
          min="1"
          max="100"
          step="1"
        />
      </div>
      <button className={styles.validBtn}>Add User</button>
    </form>
  );
};

export default UserCreation;
