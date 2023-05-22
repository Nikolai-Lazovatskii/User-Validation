import { useState } from "react";
import { setAppElement } from "react-modal";
import "./App.css";
import ModalName from "./components/modal/ModalName";
import OutputBox from "./components/output/OutputBox";
import UserCreation from "./components/user/UserCreation";

function App() {
  const [users, addUser] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [type, changeType] = useState('')

  const validInfo = (inputValid) => {
    addUser((prevInfo) => {
      return [inputValid, ...prevInfo];
    });
  };

  const errType = (inputType) => {
    changeType(inputType)
  }

  const modalState = () => {
    setOpen(true)
    setAppElement('#root')
  }

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="mainApp">
      <UserCreation errType={errType} validInfo={validInfo} modalState={modalState}/>
      <OutputBox newUsers={users} />
      <ModalName  isOpen={isOpen} closeModal={closeModal} errType={type}/>
    </div>
  );
}

export default App;
