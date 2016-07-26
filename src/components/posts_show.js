import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  onDeleteClick() {
    this.props.deletePost(this.props.params.id)// the action creator is a promise
        .then(() => {
          this.context.router.push('/');
        });
  }
  render () {
    const { post } = this.props; //identical to: const post = this.props.post

    if (!post) {
      return <div>Loading single post</div>
    }
    return (
      <div>
        <Link to="/">Back to index</Link>
        <button className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h4>Categories: {post.categories}</h4>
        {post.content}
      </div>
    )
  }
}

function mapDispatchToProps(state) {
  // single post
  return { post: state.posts.post };
}

export default connect(mapDispatchToProps, { fetchPost, deletePost })(PostsShow);
