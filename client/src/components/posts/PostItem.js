import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
 onDeleteClick(id) {
   this.props.deletePost(id);
 }

 onLikeClick(id) {
   this.props.addLike(id);
 }

 onUnlikeClick(id) {
   this.props.removeLike(id);
 }

 findUserLike(likes) {
   const { auth } = this.props;
   if (likes.filter(like => like.user === auth.user.id).length > 0) {
     return true;
   } else {
     return false;
   }
 }

 render() {
   const { post, auth, showActions } = this.props;

   return (
     <div className="card card-body col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3 feeds-align">
       
       <div className="row">
         {/* <div className="col-md-2"> */}
           <Link className="avatar-group" to="/profile">  
           {/* edited    */}
             <img
               className="rounded-circle post-avatar"
               src={post.avatar}
               alt=""
             />                      
           </Link>
           {/* edited */}
           <div>
             <Link to="/profile">{post.name}</Link> 
             {' '}
            <div className="post-location">{post.location}</div> 
           </div> 
           
           {/* edited */}
         <div className="post-group">   
           <img className="post-image" src={post.photo} alt=""/>
           <p className="lead caption">{post.text}</p>
         </div>
         {/* edited */}         
         <div className="tag-people">
           <ul className="list-group">
             {post.tags.map((tag, index) => (
              <li key={index} >
                 <i className="fas fa-user" aria-hidden="true" data-toggle="collapse" data-target="#tag-btn-collpase"/>
                {/* <i className="fa fa-check pr-1" />  */}
                <span id="tag-btn-collpase" class="collapse">{tag}</span> 
              </li>
              ))}
           </ul>
         </div>

         {/* aria-hidden="true" */}


         <div className="post-buttons">
           {showActions ? (
             <span>
               <button
                 onClick={this.onLikeClick.bind(this, post._id)}
                 type="button"
                 className="btn btn-light mr-1 lightgray-btn"
               >
                 {/* <i
                   className={classnames('fas fa-thumbs-up', {
                     'text-info': this.findUserLike(post.likes)
                   })}                 
                 />
               */}
                 <i
                   className={classnames('fas fa-heart', {
                     'red-icon': this.findUserLike(post.likes)
                   })}                 
                 />
                 {/* <span className="badge badge-light"> */}
                 <span className="badge">{post.likes.length}</span>
               </button>
               <button
                 onClick={this.onUnlikeClick.bind(this, post._id)}
                 type="button"
                 className="btn btn-light mr-1 lightgray-btn"
               >           
                 {/* <i className="text-secondary fas fa-thumbs-down" /> */}
                 <i className="far fa-heart" />
               </button>
               <Link to={`/post/${post._id}`} className="btn btn-info lightgray-btn mr-1">
                 Comments
                 <span className="badge">{post.comments.length}</span>
               </Link>
               {post.user === auth.user.id ? (
                 <button
                   onClick={this.onDeleteClick.bind(this, post._id)}
                   type="button"
                   className="btn btn-danger mr-1 red-btn"
                 >
                   <i className="fas fa-times" />
                 </button>
               ) : null}
             </span>
           ) : null}
         </div>

       </div>
     </div>
   );
 }
}

PostItem.defaultProps = {
 showActions: true
};

PostItem.propTypes = {
 deletePost: PropTypes.func.isRequired,
 addLike: PropTypes.func.isRequired,
 removeLike: PropTypes.func.isRequired,
 post: PropTypes.object.isRequired,
 auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
 auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
 PostItem
);
