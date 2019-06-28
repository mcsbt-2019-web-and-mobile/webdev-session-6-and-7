import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const Post = props => (
  <li className="list-group-item"><a href={props.url}>{props.title}</a></li>
);

class App extends React.Component {

  // see the README for instructions
  render() {
    return <div>
      <ul className="list-group"><Post url="https://google.com" title="this is the default post"/></ul>        
    </div>
  }
}
 
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
