import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
    render() {
      const { fields: {title, categories, content }, handleSubmit } = this.props;
      // same as const handleSubmit = this.props.handleSubmit;
      // same as const titile = this.props.fields.title;
      return (
        // the handleSubmit needs an action creator 
        <form onSubmit={ handleSubmit }>
          <h3>Create a new Post</h3>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control"
              // destructuring
              {...title}
              />
          </div>
          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control"
            {...categories}
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea type="text" className="form-control"
            {...content}
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      );
    }
}

// export default PostsNew;
export default reduxForm({
  // We are telling redux that we just created a form named PostsNewForm
  form: 'PostsNewForm',
  // tells redux to watch for those inputs
  fields: ['title', 'categories', 'content']
}) (PostsNew);

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
