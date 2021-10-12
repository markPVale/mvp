import React, {useState, useEffect} from 'react';
import Modal from './modal';

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'lightCyan',
  padding: '10px',
}

const ModalShell = (props) => {
  let onClose = props.onClose
  const [form, setForm] = useState([]);

  const allStorage = (entries) => {
    setForm({entries})
  }

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} >
        {/* <button onClick={console.log('clicked')}>Open Modal</button> */}
          <Modal status={props.status}  storage={allStorage} onClick={() => setIsOpen(false)} onClose={props.onClose}>
          </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Journal Entries</div>
    </>
  )
}

export default ModalShell;
