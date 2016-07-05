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
    this.props.fetchPosts(); // we can call fetchPosts before of the connect
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
          List of blog posts
      </div>
    );
  }
}
// export default PostsIndex;
//*****************
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);
//*****************
// or we can just pass an object
export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
// { fetchPosts: fetchPosts } => ES6 => { fetchPosts }
