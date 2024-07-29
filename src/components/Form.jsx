import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      message: !formData.message
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, submit the data
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: false, email: false, message: false });
    }
  };

  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT INFO : + 99 999 999 999</div>
            </div>
            <div className="screen-body-item">
              <form className="app-form" onSubmit={handleSubmit}>
                <div className="app-form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="NAME"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'app-form-control error' : 'app-form-control'}
                  />
                  {errors.name && <span className="error-text">Name is required</span>}
                </div>
                <div className="app-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'app-form-control error' : 'app-form-control'}
                  />
                  {errors.email && <span className="error-text">Email is required</span>}
                </div>
                <div className="app-form-group">
                  <textarea
                    name="message"
                    placeholder="MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'app-form-control error' : 'app-form-control'}
                  ></textarea>
                  {errors.message && <span className="error-text">Message is required</span>}
                </div>
                <div className="app-form-group buttons">
                    <button type="submit" className="app-form-button">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
