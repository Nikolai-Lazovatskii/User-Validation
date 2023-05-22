/* eslint-disable react/prop-types */
import styles from "./modalName.module.css";
import Modal from "react-modal";

const ModalName = (props) => {
  return (
    <Modal
      className={styles.modalContainer}
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
    >
      <div className={styles.modalDiv}>
        <h2 className={styles.modalTitle}>Error, {props.errType} field is empty!</h2>
        <button className={styles.modalBtn} onClick={props.closeModal}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ModalName;
