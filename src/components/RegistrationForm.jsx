import { useState } from 'react';
import { useNavigate } from 'react-router';
import './styles/RegistrationForm.css';

const RegistrationForm = ({ userType }) => {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ]= useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email};
    const baseUrl = 'http://localhost:8000';
    const endpoint = userType === 'Seller' ? 'sellers' : 'buyers';
    fetch(`${baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then(() => navigate(`/${endpoint}`));
  };

  return (
    <div className='container'>
      <h2>Register {userType}</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>First Name: </label>
          <input
            type='text'
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-field'>
          <label>Last Name: </label>
          <input
            type='text'
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='form-field'>
          <label>Email: </label>
          <input
            type='email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='submit-btn-container'>
          <button type='submit' className='form-button'>REGISTER</button>
        </div>
      </form> 
    </div>
  ); 
};

export default RegistrationForm;
