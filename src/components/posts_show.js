import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';


class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  render () {
    const { post } = this.props; //identical to: const post = this.props.post

    if (!this.props.post) {
      return <div>Loading single post</div>
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h3>Categories: {post.categories}</h3>
        <h3>{post.content}</h3>
      </div>
    )
  }
}

function mapDispatchToProps(state) {
  // single post
  return { post: state.posts.post };
}

export default connect(mapDispatchToProps, { fetchPost })(PostsShow);
