import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  title, // edited
  photo, // edited
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  if (title) {
    return (
      <div className="form-group">
        <div className="profile-group">
          <span className="col-lg-3 col-md-3 profile-title">{title}</span>
          
          <input 
            type={type}
            className={classnames('form-control form-control-lg col-lg-9 col-md-9', {'is-invalid': error})}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </div>
  
        {info && <small className="form-text tex-muted">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  } else {
    // If there is no title and there is a photo
    if (photo) {
      return (
        <div className="form-group">
            <img 
              src={value}
              type={type}
              className={classnames('form-control form-control-lg', {'is-invalid': error})}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
              disabled={disabled} 
              alt=""        
            />
            <input 
              type={type}
              className={classnames('form-control form-control-lg', {'is-invalid': error})}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
              disabled={disabled}
            />
          {info && <small className="form-text tex-muted">{info}</small>}
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
      );

      // If there is no title and no photo
    } else {
      return (
        <div className="form-group">
            <input 
              type={type}
              className={classnames('form-control form-control-lg', {'is-invalid': error})}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
              disabled={disabled}
            />
          {info && <small className="form-text tex-muted">{info}</small>}
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
      );
    }
  }
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placedholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

// defaultProps is used for undefined props
TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;