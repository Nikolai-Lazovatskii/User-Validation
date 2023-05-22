/* eslint-disable react/prop-types */
import styles from "./outputBox.module.css";
import OutputEl from "./OutputEl";

const OutputBox = (props) => {
  return (
    <div className={styles.outputContainer}>
      <ul style={{ listStyle: 'none'}}>
        {props.newUsers.map((user) => (
          <OutputEl key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default OutputBox;
