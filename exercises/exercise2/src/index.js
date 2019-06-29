import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './index.css';

const Post = props => {
  let link = `/post/${props.id}`
  return <li className="list-group-item"><a href={link}>{props.title}</a></li>
};

class Sidebar extends React.Component {
  render() {
    return <div className="sidebar">
      <ul className="list-group">
        <Post id="" title="first post"/>
      </ul>
    </div>;
  }
}

class Article extends React.Component {
  render() {
    return <div>
      <h1>this is the title</h1>
    </div>
  }
}

const Home = props => (<h1>HOME</h1>);

const Main = props => (
  <div className="main">
  </div>
);

const App = props => (
  <div>
    <Sidebar/>
    <Main/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
