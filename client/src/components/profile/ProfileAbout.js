import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props; 

    // Get first name 
    // const firstName = profile.user.name.trim().split(' ')[0];

   return (
     <div className="row">
       <div className="col-md-12">
         <div className="card card-body bg-light mb-3">
           <h3 className="text-center text-info">{profile.name}'s Bio</h3>
           <p className="lead">
             {isEmpty(profile.bio) ? (
               <span>{profile.name} does not have a bio</span>
             ) : (
               <span>{profile.bio}</span>
             )}
           </p>
           {/* Edited below */}
           <p>{profile.website}</p>
           <hr />
           <h3 className="text-center text-info">Follwed by</h3>
           <div className="row">
             <div className="d-flex flex-wrap justify-content-center align-items-center">
               {profile.followers}
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
}
ProfileAbout.propTypes = {
 profile: PropTypes.object.isRequired
};
export default ProfileAbout;