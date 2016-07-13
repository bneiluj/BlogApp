import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    // Try avoid context
    // Defining an object on the post new class
    // The router will give use the context from index.js
    // It's like props
    // Just give all the properties from all the parents components
    static contextTypes = {
      router: PropTypes.object
    };

    onSubmit(props) {
      this.props.createPost(props);
    }
    render() {
      const { fields: {title, categories, content }, handleSubmit } = this.props;
      // same as const handleSubmit = this.props.handleSubmit;
      // same as const titile = this.props.fields.title;
      return (
        // the handleSubmit needs an action creator
        // <form onSubmit={ handleSubmit(this.props.createPost) }>
        // need to bind the context
        // the bind(this) means it will pass properties from the form 
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <h3>Create a new Post</h3>
          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label>Title</label>
            <input type="text" className="form-control"
              // destructuring
              {...title}
              />
              <div className="text-help">
                {title.touched ? title.error: ''}
              </div>
          </div>
          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label>Categories</label>
            <input type="text" className="form-control"
            {...categories}
            />
            <div className="text-help">
              {categories.touched ? categories.error: ''}
            </div>
          </div>
          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label>Content</label>
            <textarea type="text" className="form-control"
            {...content}
            />
            <div className="text-help">
              {content.touched ? content.error: ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to='/' className='btn btn-danger'>Cancel</Link>
        </form>
      );
    }
}
// Validation part
function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Enter a username";
  }
  if (!values.categories) {
    errors.categories = "Enter categories";
  }
  if (!values.content) {
    errors.content = "Enter a content";
  }
  return errors;
}

// export default PostsNew;

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//  reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  // We are telling redux that we just created a form named PostsNewForm
  form: 'PostsNewForm',
  // tells redux to watch for those inputs
  fields: ['title', 'categories', 'content'],
  // function above
  validate
}, null, { createPost }) (PostsNew);

// So it will look like that:
// state === {
//   form: {
//     PostsNewForm: {
//       title: '......',
//       categories: '......',
//       content: '......'
//     }
//   }
// }
