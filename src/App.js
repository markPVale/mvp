
import React, {useContext} from "react";
import Button from '@material-ui/core/Button';
import TimeBox from './newTimer.js';
import SetTimer from './setTimer.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {




  render() {
    const { name } = this.props;
    // const {childs} = this.props.children
    {console.log('props', this.props)}

    return (
      <>
      <TimeBox />
        <Button variant="contained"> material UI button</Button>
        {/* <button type="button" className="btn btn-primary">
          This is a bootstrap button
        </button> */}
      </>
    );
  }
}

export default App;
