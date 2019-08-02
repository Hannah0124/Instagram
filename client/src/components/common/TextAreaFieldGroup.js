import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextAreaFieldGroup = ({
 title, // edited
 name,
 placeholder,
 value,
 error,
 info,
 onChange
}) => {
  if (title) {
    return (
      <div className="form-group">
        <div className="profile-group">
          <span className="col-lg-3 col-md-3 profile-title">{title}</span>
         <textarea
           className={classnames('form-control form-control-lg col-lg-9 col-md-9', {
             'is-invalid': error
           })}
           placeholder={placeholder}
           name={name}
           value={value}
           onChange={onChange}
         />
        </div>
        {info && <small className="form-text text-muted">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  } else {
    return (
      <div className="form-group">
        <textarea
          className={classnames('form-control form-control-lg', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />

       {info && <small className="form-text text-muted">{info}</small>}
       {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }

};

TextAreaFieldGroup.propTypes = {
 name: PropTypes.string.isRequired,
 placeholder: PropTypes.string,
 value: PropTypes.string.isRequired,
 info: PropTypes.string,
 error: PropTypes.string,
 onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;