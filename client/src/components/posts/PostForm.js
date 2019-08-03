import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
 constructor(props) {
   super(props);
   this.state = {
     text: '',
     errors: {}
   };

   this.onChange = this.onChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
 }

 componentWillReceiveProps(newProps) {
   if (newProps.errors) {
     this.setState({ errors: newProps.errors });
   }
 }

 onSubmit(e) {
   e.preventDefault();

   const { user } = this.props.auth;

   const newPost = {
     photo: this.state.photo, // edited
     text: this.state.text,
     location: this.state.location, // edited
     tags: this.state.tags, // edited
     name: user.userName, // edited
     avatar: user.avatar
   };

   this.props.addPost(newPost);
   this.setState({ text: '' });
 }

 onChange(e) {
   this.setState({ [e.target.name]: e.target.value });
 }

url = '';
onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
}

 render() {
   const { errors } = this.state;

   return (
     <div className="post-form mb-3">
       <div className="card card-info">
         <div className="card-header bg-info text-white">Say Something...</div>
         <div className="card-body">
           <form onSubmit={this.onSubmit}>
             <div className="form-group">
              {/* edited */}
              <div className="col-lg-5"></div>
              <div className="col-lg-7">          
                <TextFieldGroup
                  src={this.state.photo}
                  type="url"
                  placeholder="Upload an image URL"
                  name="photo"
                  value={this.state.photo}   
                  onChange={this.onChange}
                  error={errors.photo}
                  accept=" image/*"
                />
                {/* edited  */}
                <TextAreaFieldGroup
                  placeholder="Write a caption"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
                <h5>Tag People</h5>
                <TextFieldGroup
                  placeholder="eg. Hannah,Sarah,Kevin"
                  name="tags"
                  value={this.state.tags}
                  onChange={this.onChange}
                  error={errors.tags}
                  // info="Please use comma separated values (eg.
                    // HTML,CSS,JavaScript,PHP"
                />
                <h5>Add Location</h5>
                <TextFieldGroup
                 placeholder="eg. Seattle, WA"
                 name="location"
                 value={this.state.location}
                 onChange={this.onChange}
                 error={errors.location}
               />  
              </div>
             </div>
             <button type="submit" className="btn btn-dark post-btn">
               Submit
             </button>
           </form>
         </div>
       </div>
     </div>
   );
 }
}

PostForm.propTypes = {
 addPost: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
 errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
 auth: state.auth,
 errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);