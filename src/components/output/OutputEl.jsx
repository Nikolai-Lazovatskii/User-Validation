/* eslint-disable react/prop-types */
import styles from './outputEl.module.css'

const OutputEl = (props) => {
  return (
    <li>
        <p
          className={styles.newUser}
        >{`Name: ${props.user.name} have ${props.user.age} years old`} <button className={styles.deleteBtn}>Delete</button></p>
    </li>
  )
}

export default OutputEl
