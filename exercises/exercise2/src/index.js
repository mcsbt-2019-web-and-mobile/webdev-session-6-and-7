import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './index.css';

const Post = props => {
  let link = `/post/${props.id}`
  return <li className="list-group-item"><Link to={link}>{props.title}</Link></li>
};

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("http://hn.algolia.com/api/v1/search?query=React")
      .then(resp => resp.json())
      .then(json => this.setState({
        posts: json.hits
      }));
  }
  
  render() {
    let posts = this.state.posts.map(post => <Post id={post.objectID} title={post.title}/>);
    return <div className="sidebar">
      <ul className="list-group">
        {posts}
      </ul>
    </div>;
  }
}

class Article extends React.Component {

  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentWillReceiveProps() {
    fetch(`http://hn.algolia.com/api/v1/items/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(json => this.setState({
        data: json
      }));
  }

  componentDidMount() {
    fetch(`http://hn.algolia.com/api/v1/items/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(json => this.setState({
        data: json
      }));
  }
  
  render() {
    if (this.state.data) {
      let children = this.state.data.children.map(c => c.text);
      return (
        <div>
          <h1>{this.state.data.title}</h1>
          {children}
        </div>
      );
    } else {
      return <h1></h1>
    }
  }
}

const Home = props => (<h1>HOME</h1>);

const Main = props => (
  <div className="main">
    <Route exact path="/" component={Home}/>
    <Route path="/post/:id" component={Article}/>    
  </div>
);

const App = props => (
  <div>
    <Sidebar/>
    <Main/>
  </div>
);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
