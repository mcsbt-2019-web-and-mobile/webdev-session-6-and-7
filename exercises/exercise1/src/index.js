import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const Post = props => (
  <li className="list-group-item"><a href={props.url}>{props.title}</a></li>
);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://hn.algolia.com/api/v1/search?query=React')
      .then(res => res.json())
      .then(json => this.setState({
        posts: json.hits
      }));
  }
  
  render() {
    let posts = this.state.posts.map(post => (<Post url={post.url} title={post.title}/>))
    return <div>
      <ul className="list-group">{posts}</ul>        
    </div>
  }
}
 
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
