import React, {useState, useEffect, useContext} from 'react'
import ReactDom from 'react-dom'
import FormPropsTextFields from './text'
import axios from 'axios';
// import entriesCreate from './entryController'


const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const Modal = ({popModal, status, children, onClose, storage}) => {

  const [entries, setEntries] = useState({
    projectText: '',
    issuesText: '',
    reflectText: '',
  });
  const [entryEditing, setEntryEditing] = useState("");
  const display = useContext(entries)

  const addEntry = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Math.random().toString(36).substr(2, 9),
      text: e.target.entry.value,
    };
    setEntries([...entries, newEntry]);
    e.target.entry.value = "";
  };

  useEffect(() => {
    const json = JSON.stringify(entries);
    localStorage.setItem("entries", json);
  }, [entries]);

  console.log('entry check', entries);

  // const clickHandler = (entries) => {
  //   axios.post('/newEntry', {
  //     title: `${projectText}`,
  //     issues: `${issuesText}`,
  //     body: `${reflectText}`
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  //   // storage(entries);
  //   onClose();
  // }

  const handleProject = (e) => {
    setEntries(prevState => ({
      ...prevState,
      projectText: e.target.value }))
  }

  const handleIssues = (e) => {
    setEntries(prevState => ({
      ...prevState,
      issuesText: e.target.value }))
  }

  const handleReflect = (e) => {
    setEntries(prevState => ({
      ...prevState,
      reflectText: e.target.value}))
  }

  const clickHandler = (entries) => {
    axios.post('/newEntry', {
      title: entries.projectText,
      issues: entries.issuesText,
      body: entries.reflectText,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
    })
    // storage(entries);
    onClose();
  }

  console.log('entries: ', entries)
  console.log('display:', display)

  const date = new Date().toLocaleString();

  if(!status) return null
  return ReactDom.createPortal(
    <>
    {/* {window.open("http://localhost:3000/?/", "worktime", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")} */}
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button type='button' className="btn btn-outline-secondary" onClick={() => {onClose()}} >X</button>
          <div className="container">
                <form onSubmit={() => {console.log('submit')}}>
                    <div className="form-group row">
                      <div className="p-1">
                      <time className="h5 ">
                        {date}
                      </time>
                      </div>
                        <label className="display-6 p-1">Project</label>
                        <input type="text"
                          className="form-control"
                          name="project"
                          value={entries.project}
                          onChange={(e) => {handleProject(e)}}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="display-6 p-1">Issues/Tech/Things Learned</label>
                        <input
                          type="text"
                          className="form-control"
                          name="issues"
                          value={entries.issues}
                          onChange={(e) => {handleIssues(e)}}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="display-6 p-1">Reflect</label>
                        <textarea
                          autoFocus
                          placeholder="Text"
                          rows='20'
                          cols='50'
                          name="reflect"
                          value={entries.reflect}
                          onChange={(e) => {handleReflect(e)}}
                          >

                        </textarea>
                    </div>
                    <button type="button" onClick={() => {clickHandler(entries)}} className="btn btn-outline-secondary m-1">Submit</button>

                </form>
            </div>
        {children}
      </div>
    </>,
    document.getElementById('portal'),
    <div>
    {/* {
      entries.map((entry) => <div key={entry.id}>{entry.text}</div> )
    } */}
    </div>
  )
}

export default Modal;



{/* <label>
Project/Issues/Tech/Things Learned
<input
type='text'
name='project'
placeholder='project'
/>
</label>
<br />
<label>
Text
<textarea
autoFocus
placeholder="Text"
rows='20'
cols='50'></textarea>
</label> */}