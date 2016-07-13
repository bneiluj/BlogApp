// With the connect it's now a container
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

// Function based component
// export default () => {
//   return <div>List of blog posts</div>;
// }

// Class based component
class PostsIndex extends Component {
  // It's the best place to fecth data
  componentWillMount() {
    console.log("Call action creator to fetch posts");
    // Action creator to fetch all posts
    this.props.fetchPosts(); // we can call fetchPosts before of the connect
  }

  renderPosts () {
    return this.props.posts.map((post) => {
      return (
        // The id comes back from the backend
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{ post.categories }</span>
          <strong>{ post.title }</strong>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link
            to="/posts/new"
            className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

// We need to display all the posts
function mapDispatchToProps(state) {
  // It will map our states to our props
  // our posts are avaiable on our state through the state.props
  return { posts: state.posts.all };
}
// export default PostsIndex;
//*****************
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);
//*****************
// or we can just pass an object
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
export default connect(mapDispatchToProps, { fetchPosts: fetchPosts })(PostsIndex);
// { fetchPosts: fetchPosts } => ES6 => { fetchPosts }
