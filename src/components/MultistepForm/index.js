import "./index.css";
import { useState } from 'react';
import { useNavigate } from "react-router";
import FormError from "../FormError/index";
import Announcer from "../Announcer/index";

function MultiStepForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateStep = (step) => {
    let stepErrors = {};
    let isValid = true;
    
    if (step === 1) {
      if (!formData.firstName.trim()) {
        stepErrors.firstName = 'First name is required';
        isValid = false;
      }
      
      if (!formData.lastName.trim()) {
        stepErrors.lastName = 'Last name is required';
        isValid = false;
      }
      
      if (!formData.email.trim()) {
        stepErrors.email = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        stepErrors.email = 'Email is invalid';
        isValid = false;
      }
    }
    
    if (step === 2) {
      if (!formData.phone.trim()) {
        stepErrors.phone = 'Phone number is required';
        isValid = false;
      }
      
      if (!formData.address.trim()) {
        stepErrors.address = 'Address is required';
        isValid = false;
      }

      if (!formData.city.trim()) {
        stepErrors.city = 'City is required';
        isValid = false;
      }
    }
    
    setErrors(stepErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      // Simulate sneding data to a server or something.
      navigate("confirm");
    }
  };

  // Step 1: Personal Information
  const renderStep1 = () => (
    <div className="form-step">
      <h2>Personal Information</h2>
      <div className="fields-grid">
        <div className="form-group">
          <label htmlFor="firstName">First Name <span className="required-star">*</span></label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required="true"
            aria-required="true"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John..."
            className={errors.firstName ? 'input-error' : ''}
          />
          {errors.firstName && (
            <>
              <FormError errorMessage={errors.firstName} />
              <Announcer message={errors.firstName} />
            </>
          ) }
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last Name <span className="required-star">*</span></label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required="true"
            aria-required="true"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe..."
            className={errors.lastName ? 'input-error' : ''}
          />
          {errors.lastName && (
            <>
              <FormError errorMessage={errors.lastName} />
              <Announcer message={errors.lastName} />
            </>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email <span className="required-star">*</span></label>
          <input
            id="email"
            type="email"
            name="email"
            required="true"
            aria-required="true"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@domain.com"
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && (
            <>
              <FormError errorMessage={errors.email} />
              <Announcer message={errors.email} />
            </>
          )}
        </div>
      </div>
      <div className="buttons">
        <button type="button" className="next-btn" onClick={nextStep}>Next</button>
      </div>
    </div>
  );

  // Step 2: Contact Information
  const renderStep2 = () => (
      <div className="form-step">
        <h2>Contact Information</h2>
        <div className="fields-grid">
          <div className="form-group">
            <label htmlFor="phone">Phone Number <span className="required-star">*</span></label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required="true"
              aria-required="true"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && (
              <>
                <FormError errorMessage={errors.phone} />
                <Announcer message={errors.phone} />
              </>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address <span className="required-star">*</span></label>
            <input
              id="address"
              type="text"
              name="address"
              required="true"
              aria-required="true"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main St"
              className={errors.address ? 'input-error' : ''}
            />
            {errors.address && (
              <>
                <FormError errorMessage={errors.address} />
                <Announcer message={errors.address} />
              </>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="city">City <span className="required-star">*</span></label>
            <input
              id="city"
              type="text"
              name="city"
              required="true"
              aria-required="true"
              value={formData.city}
              onChange={handleChange}
              placeholder="New York"
              className={errors.address ? 'input-error' : ''}
            />
            {errors.city && (
              <>
                <FormError errorMessage={errors.city} />
                <Announcer message={errors.city} />
              </>
            )}
          </div>
          
          <div className="form-group">
            <label>Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              placeholder="87267"
              onChange={handleChange}
            />
          </div>
      </div>
      <div className="buttons">
          <button type="button" className="prev-btn" onClick={prevStep}>Previous</button>
          <button type="button" className="next-btn" onClick={nextStep}>Next</button>
      </div>
    </div>
  );

  // Step 3: Review & Submit
  const renderStep3 = () => (
    <div className="form-step">
      <h2>Review Information</h2>
      <div className="flex flex-col gap-y-4">
        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>Zip Code:</strong> {formData.zipCode}</p>
      </div>
      
      <div className="buttons">
        <button type="button" className="prev-btn" onClick={prevStep}>Previous</button>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-8">Reserve a Table</h1>
      <div className="flex justify-center items-center gap-8">
        <span className={`step ${currentStep >= 1 ? 'active-step' : ''}`}>1</span>
        <span className={`step ${currentStep >= 2 ? 'active-step' : ''}`}>2</span>
        <span className={`step ${currentStep >= 3 ? 'active-step' : ''}`}>3</span>
      </div>
      
      <form>
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </form>
    </div>
  );
}

export default MultiStepForm;