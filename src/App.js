
import React, {useContext} from "react";
import Button from '@material-ui/core/Button';
import TimeBox from './newTimer';
import ModalShell from './modalShell';
import DisplayAllEntries from './postList';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'regenerator-runtime/runtime';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      timesUp: false,
      isOpen: false
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }


  inputHandler() {
    this.modalHandler()
  }

  modalHandler() {
    this.setState({
      isOpen: true
    })

    // window.open("http://localhost:3000/?", "worktime", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")
    window.open("https://www.notion.so/c231bd20baef47149ca90c213b4a6759?v=ff4fe6ffd99a4376b990884fee4aae2a", "notion", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")

  }

  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const { name } = this.props;

    return (
      <>
      <div style={{marginTop: 80}} ></div>
      <div className='container bg-light'>
      <div className="shadow-lg p-3 mb-5 bg-light rounded">
      <TimeBox  timesUp={this.inputHandler}/>
      </div>
        <ModalShell popModal={this.modalHandler} status={this.state.isOpen} onClose={this.closeModal}/>
        <div>
        <DisplayAllEntries/>
        </div>
        </div>
      </>
    )
  }
}

export default App;
