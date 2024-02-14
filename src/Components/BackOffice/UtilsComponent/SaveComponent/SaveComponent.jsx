import React, { useState } from "react";
import axios from "axios";
import './SaveComponent.css';

const SaveComponent = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    address: '',
    month: '',
    day: '',
    year: '',
    gender: '',
    phone: '',
    email: '',
    cin: ''
  });
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleGenderChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (/^[1-9]$|^[0][1-9]$|^1[0-2]$/.test(value) || value === '') {
      setUser({ ...user, month: value });
    }
  };

  const handleDayChange = (e) => {
    const value = e.target.value;
    if (/^[1-9]$|^[0][1-9]$|^1[0-9]$|^2[0-9]$|^3[0-3]$/.test(value) || value === '') {
      setUser({ ...user, day: value });
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,4}$/.test(value) || value === '') {
      setUser({ ...user, year: value });
    }
  };

  const handleInputChange = (e, field) => {
    setUser({ ...user, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employeeObject = {
      "firstname": user.firstName,
      "lastname": user.lastName,
      "email": user.email,
      "password": "password",
      "birthdate": `${user.year}-${user.month.padStart(2, '0')}-${user.day.padStart(2, '0')}T21:00:00.000+00:00`,
      "profil": null,
      "address": user.address,
      "gender": user.gender.toUpperCase().charAt(0), 
      "role": "Employe",
      "id_salary": 1,
      "cin": user.cin
    };

    try{
        const response = await axios.post(`${baseUrl}/user/new`, employeeObject)
        //console.log(response);
    }catch(err){
        console.log(err);
    }

    setUser({
      firstName: '',
      lastName: '',
      address: '',
      month: '',
      day: '',
      year: '',
      gender: '',
      phone: '',
      email: '',
      cin: ''
    });
  };

  return (
    <div>
      <div>
        <h2 className="big-title">Add new employee</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h4>Name</h4>
          <div className="name-input-container">
            <div className="name-input">
              <label>Firstname</label>
              <input className="input-case" type="text" value={user.firstName} onChange={(e) => handleInputChange(e, 'firstName')} />
            </div>
            <div className="name-input">
              <label>Lastname</label>
              <input className="input-case" type="text" value={user.lastName} onChange={(e) => handleInputChange(e, 'lastName')} />
            </div>
            <div className="name-input">
              <label>Adress</label>
              <input className="input-case" type="text" value={user.address} onChange={(e) => handleInputChange(e, 'address')} />
            </div>
          </div>
          <h4>Birthdate</h4>
          <div className="date-input-container">
            <div className="name-input">
              <label>Month</label>
              <input className="input-case" type="text" value={user.month} onChange={(e) => handleMonthChange(e)} />
            </div>
            <div className="name-input">
              <label>Day</label>
              <input className="input-case" type="text" value={user.day} onChange={(e) => handleDayChange(e)} />
            </div>
            <div className="name-input">
              <label>Year</label>
              <input className="input-case" type="text" value={user.year} onChange={(e) => handleYearChange(e)} />
            </div>
          </div>
          <h4>Gender</h4>
          <div className="gender-input-container">
            <div>
              <label>
                <input
                  type="radio"
                  value="male"
                  checked={user.gender === 'male'}
                  onChange={handleGenderChange}
                />
                Male
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={user.gender === 'female'}
                  onChange={handleGenderChange}
                />
                Female
              </label>
            </div>
          </div>
          <div className="phone-input-container">
            <div className="name-input">
              <label>Phone</label>
              <input className="input-case" type="text" value={user.phone} onChange={(e) => handleInputChange(e, 'phone')} />
            </div>
            <div className="name-input">
              <label>Email</label>
              <input className="input-case" type="email" value={user.email} onChange={(e) => handleInputChange(e, 'email')} />
            </div>
          </div>
          <div className="phone-input-container">
            <div className="name-input">
              <label>CIN</label>
              <input className="input-case" type="text" value={user.cin} onChange={(e) => handleInputChange(e, 'cin')} />
            </div>
          </div>
          <button type="submit" className="add-employe">Add</button>
        </form>
      </div>
    </div>
  )
}

export default SaveComponent;
