import React, { useState } from 'react';
import styles from "./index.module.css"
import ValidationError from '../validationError';

const AddTicketForm = () => {
  const currentDate = new Date();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    departurePort: "",
    arrivalPort: "",
    departureDate: "",
    arrivalDate: "",
  });

  const [inputError, setInputError] = useState({
    firstName: "",
    lastName: "",
    departurePort: "",
    arrivalPort: "",
    departureDate: "",
    arrivalDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    const fieldName = e.target.name
    setFormData({ ...formData, [fieldName]: e.target.value });
    setInputError({ ...inputError, [fieldName]: "" });
  };

  const handleBlur = (fieldName) => {
    if (!formData[fieldName].trim()) {
      setInputError({ ...inputError, [fieldName]: `The field is mandatory!` });
    }
  };

  return (
    <div className={styles["ticket-form"]}>
      <h3>Ticket Form</h3>

      <fieldset className={styles["float-label-field"]}>
        <label htmlFor="txtName">First Name</label>
        <input
          type='text'
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          onBlur={(e) => handleBlur(e.target.name)}
          // error={inputError}
          className={inputError.firstName ? styles.errorInput : ''}
        />
        {inputError?.firstName && <ValidationError error={inputError?.firstName} />}
      </fieldset>

      <fieldset className={styles["float-label-field"]}>
        <label htmlFor="txtName">Last Name</label>
        <input
          type='text'
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          onBlur={(e) => handleBlur(e.target.name)}
          error={inputError}
        />
        {inputError?.lastName && <ValidationError error={inputError?.lastName} />}
      </fieldset>

      <fieldset className={styles["float-label-field"]}>
        <label htmlFor="txtDepartureAirport">Departure airport</label>
        <input
          type='text'
          name="departurePort"
          value={formData.departurePort}
          onChange={handleInputChange}
          onBlur={(e) => handleBlur(e.target.name)}
          error={inputError}
        />
        {inputError.departurePort && <ValidationError error={inputError.departurePort} />}
      </fieldset>

      <fieldset className={styles["float-label-field"]}>
        <label htmlFor="txtDestinationAirport">Destination airport</label>
        <input
          type='text'
          name="arrivalPort"
          value={formData.arrivalPort}
          onChange={handleInputChange}
          onBlur={(e) => handleBlur(e.target.name)}
          error={inputError}
        />
        {inputError.arrivalPort && <ValidationError error={inputError.arrivalPort} />}
      </fieldset>

      <fieldset className={styles["float-label-field"]}>
        <label htmlFor="txtDepartureDate">Departure date</label>
        <input
          type='date'
          name="departureDate"
          value={formData.departureDate}
          onChange={handleInputChange}
          onBlur={(e) => handleBlur(e.target.name)}
          error={inputError}
        />
        {inputError.departureDate && <ValidationError error={inputError.departureDate} />}
      </fieldset>

      <fieldset className={styles["float-label-field"]}>
        <label htmlFor="txtArrivalDate">Return date</label>
        <input
          type='date'
          name="arrivalDate"
          value={formData.arrivalDate}
          onChange={handleInputChange}
          onBlur={(e) => handleBlur(e.target.name)}
          error={inputError}
        />
        {inputError.arrivalDate && <ValidationError error={inputError.arrivalDate} />}
      </fieldset>
    </div>
  );
};

export default AddTicketForm;
