import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({ 
  title, // added
  name, 
  value, 
  error, 
  info, 
  onChange, 
  options }) => {
    const selectOptions = options.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    if (title) {
      return (
       <div className="form-group">
          <div className="profile-group">
            <span className="col-lg-3 col-md-3 profile-title">{title}</span>
            <select
              className={classnames('form-control form-control-lg col-lg-9 col-md-9', {
                'is-invalid': error
              })}
             name={name}
             value={value}
             onChange={onChange}
            >
              {selectOptions}
            </select>
           </div>
          {info && <small className="form-text text-muted">{info}</small>}
          {error && <div className="invalid-feedback">{error}</div>}
       </div>
     );
    } else {
      return (
        <div className="form-group">
          <select
            className={classnames('form-control form-control-lg', {
              'is-invalid': error
            })}
            name={name}
            value={value}
            onChange={onChange}
          >
            {selectOptions}
          </select>
          {info && <small className="form-text text-muted">{info}</small>}
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
      );
    }
};

SelectListGroup.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;