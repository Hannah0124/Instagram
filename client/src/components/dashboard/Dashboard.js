    
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';

class Dashboard extends Component {
 componentDidMount() {
   this.props.getCurrentProfile();
 }

 onDeleteClick(e) {
   this.props.deleteAccount();
 }

 render() {
   const { user } = this.props.auth;
   const { profile, loading } = this.props.profile;

   let dashboardContent;

   if (profile === null || loading) {
     dashboardContent = <Spinner />;
   } else {
     // Check if logged in user has profile data
     if (Object.keys(profile).length > 0) {
       dashboardContent = (
         <div>
          {/* Edited */}
          <img
              className="rounded-circle account-avatar"
              src={user.avatar}
              alt=""
              />
           <div>    
               <div className="welcome-text" >
               <em>Welcome <Link to={`/profile/${profile.handle}`}>{profile.name}</Link>!</em> <span />    
               </div> 
            <div className="profile-list">
              <div>{profile.status ? profile.status  : ''}{profile.company ? ` at ${profile.company}` : ''}</div> 
              <div>  {profile.location ? `Live in ${profile.location}` : ''}  </div>  
              <div><ProfileActions/></div>
            </div>
             
             </div>
           <div style={{ marginBottom: '60px' }} />

           <button
             onClick={this.onDeleteClick.bind(this)}
             className="btn btn-danger red-btn delete-account-btn"
          >
            Delete My Account
          </button>
         </div>
       );
     } else {
       // User is logged in but has no profile
       dashboardContent = (
         <div>
           {/* edited */}
           <img
              className="rounded-circle account-avatar"
              src={user.avatar}
              alt=""
              />
           <div className="lead text-muted">Welcome {user.fullName}</div>
           <p>You have not yet setup a profile</p>
           <Link to="/create-profile" className="btn btn-lg btn-info">
             Create Profile
           </Link>
         </div>
       );
     }
   }

   return (
     <div className="dashboard">
       <div className="container">
         <div className="row">
           <div className="col-md-12">
             <div className="card card-body text-center  mb-3">
             <h3 className="display-4">My account</h3>
             <h2>{user.fullName}</h2>
               {/* <img
                 style={{position: "relative" }}
                 className="rounded-circle account-avatar"
                 src={user.avatar}
                 alt=""
               /> */}
             {dashboardContent}
           </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
}

Dashboard.propTypes = {
 getCurrentProfile: PropTypes.func.isRequired,
 deleteAccount: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
 profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
 profile: state.profile,
 auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
 Dashboard
);