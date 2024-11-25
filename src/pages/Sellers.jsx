import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserTable from '../components/UserTable';

const Sellers = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/sellers')
      .then((response) => response.json())
      .then((sellers) => setSellers(sellers));
  });

  return (
    <div className='container table-container'>
      <Link to='/sellers/register' className='register-btn'>Register Seller</Link>
      <h2>All registered sellers</h2>
      <UserTable users={sellers}/>
    </div>
  ); 
};

export default Sellers;
