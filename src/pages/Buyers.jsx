import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserTable from '../components/UserTable';

const Buyers = () => {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/buyers')
      .then((response) => response.json())
      .then((buyers) => setBuyers(buyers));
  }, []);

  return (
    <div className='container table-container'>
      <Link to='/buyers/register' className='register-btn'>Register Buyer</Link>
      <h2>All registered buyers</h2>
      <UserTable users={buyers}/>
    </div>
  );
};

export default Buyers;
