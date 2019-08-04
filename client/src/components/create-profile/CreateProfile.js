import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
 constructor(props) {
   super(props);
   this.state = {
     displaySocialInputs: false,
     handle: '',
     name: '',
     website: '',
     bio: '',
     status: '',
     company: '',
     location: '',
     email: '',
     phone: '',
     gender: '',
     twitter: '',
     facebook: '',
     linkedin: '',
     youtube: '',
     errors: {}
   };

   this.onChange = this.onChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
 }

 componentWillReceiveProps(nextProps) {
   if (nextProps.errors) {
     this.setState({ errors: nextProps.errors });
   }
 }

 onSubmit(e) {
   e.preventDefault();

   const profileData = {
     handle: this.state.handle,
     name: this.state.name,
     website: this.state.website,
     bio: this.state.bio, 
     status: this.state.status,
     company: this.state.company,
     location: this.state.location,
     email: this.state.email,
     phone: this.state.phone,
     gender: this.state.gender, 
     twitter: this.state.twitter,
     facebook: this.state.facebook,
     linkedin: this.state.linkedin,
     youtube: this.state.youtube,
   };

   this.props.createProfile(profileData, this.props.history);
 }

 onChange(e) {
   this.setState({ [e.target.name]: e.target.value });
 }

 render() {
   const { errors, displaySocialInputs } = this.state;

   let socialInputs;

   if (displaySocialInputs) {
     socialInputs = (
       <div>
         <InputGroup
           placeholder="Twitter Profile URL"
           name="twitter"
           icon="fab fa-twitter"
           value={this.state.twitter}
           onChange={this.onChange}
           error={errors.twitter}
         />

         <InputGroup
           placeholder="Facebook Page URL"
           name="facebook"
           icon="fab fa-facebook"
           value={this.state.facebook}
           onChange={this.onChange}
           error={errors.facebook}
         />

         <InputGroup
           placeholder="Linkedin Profile URL"
           name="linkedin"
           icon="fab fa-linkedin"
           value={this.state.linkedin}
           onChange={this.onChange}
           error={errors.linkedin}
         />

         <InputGroup
           placeholder="YouTube Channel URL"
           name="youtube"
           icon="fab fa-youtube"
           value={this.state.youtube}
           onChange={this.onChange}
           error={errors.youtube}
         />
       </div>
     );
   }

   // Select options for status
   const options = [
     { label: '* Select Professional Status', value: 0 },
     { label: 'Developer', value: 'Developer' },
     { label: 'Junior Developer', value: 'Junior Developer' },
     { label: 'Senior Developer', value: 'Senior Developer' },
     { label: 'Manager', value: 'Manager' },
     { label: 'Student', value: 'Student' },
     { label: 'Looking for job', value: 'Looking for job' },
     { label: 'Instructor', value: 'Instructor' },
     { label: 'Intern', value: 'Intern' },
     { label: 'Other', value: 'Other' }
   ];

   // Select options for gender
   const genders = [
     { label: 'Select gender', value: 0 },
     { label: 'None binary', value: 'None binary' },
     { label: 'Male', value: 'Male' },
     { label: 'Female', value: 'Female' },
     { label: 'Not specified', value: 'Not specified' }
  ];

   return (
     <div className="create-profile">
       <div className="container">
         <div className="row">
           <div className="col-md-8 m-auto">
             <h1 className="display-4 text-center">Create Your Profile</h1>
             <p className="lead text-center">
               Update profile to make your account stand out!
             </p>
             <small className="d-block pb-3">* = required fields</small>

             <form onSubmit={this.onSubmit}>
            
              <TextFieldGroup
                 title="Name" //  Edited
                 placeholder="* Name"
                 name="name"
                 value={this.state.name}
                 onChange={this.onChange}
                 error={errors.name}
               />
               <TextFieldGroup
                 title="Handle" //  Edited
                 placeholder="* A unique name for your profile URL."
                 name="handle"
                 value={this.state.handle}
                 onChange={this.onChange}
                 error={errors.handle}
               />
               <TextFieldGroup
                 title="Website"
                 placeholder="Website"
                 name="website"
                 value={this.state.website}
                 onChange={this.onChange}
                 error={errors.website}
               />
               <TextAreaFieldGroup
                 title="Bio"
                 placeholder="Bio"
                 name="bio"
                 value={this.state.bio}
                 onChange={this.onChange}
                 error={errors.bio}
               />
               <SelectListGroup
                 title="Status"
                 placeholder="Status"
                 name="status"
                 value={this.state.status}
                 onChange={this.onChange}
                 options={options}
                 error={errors.status}
               />
               <TextFieldGroup
                 title="Company"
                 placeholder="Company or school"
                 name="company"
                 value={this.state.company}
                 onChange={this.onChange}
                 error={errors.company}
               />
               <TextFieldGroup
                 title="Location"
                 placeholder="eg. Seattle, WA"
                 name="location"
                 value={this.state.location}
                 onChange={this.onChange}
                 error={errors.location}
               />             
               <div className="mb-3">
                 {/* Edited */}
                 <span className="col-lg-3 col-md-3 profile-title">SNS link</span> 
                 <button
                   type="button"
                   onClick={() => {
                     this.setState(prevState => ({
                       displaySocialInputs: !prevState.displaySocialInputs
                     }));
                   }}
                   className="btn btn-light col-lg-9 col-md-9"
                 >
                   Add Social Network Links
                 </button>
                 <span className="text-muted">Optional</span>
               </div>
               {socialInputs}
               <form>
                 <h5 className="gray-font">Private info</h5>
                 <TextFieldGroup
                   title="Email"
                   placeholder="email"
                   name="email"
                   value={this.state.email}
                   onChange={this.onChange}
                   error={errors.email}
                 />  
                 <TextFieldGroup
                   title="Phone"
                   placeholder="phone"
                   name="phone"
                   value={this.state.phone}
                   onChange={this.onChange}
                   error={errors.phone}
                 />  
                 <SelectListGroup
                   title="Gender"
                   placeholder="gender"
                   name="gender"
                   value={this.state.gender}
                   onChange={this.onChange}
                   options={genders}
                   error={errors.status}     
                 />
               </form>


               <input
                 type="submit"
                 value="Submit"
                 className="btn btn-info btn-block mt-4"
               />
             </form>
           </div>
         </div>
       </div>
     </div>
   );
 }
}
CreateProfile.propTypes = {
 profile: PropTypes.object.isRequired,
 errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
 profile: state.profile,
 errors: state.errors
});
export default connect(mapStateToProps, { createProfile })(
 withRouter(CreateProfile)
);
