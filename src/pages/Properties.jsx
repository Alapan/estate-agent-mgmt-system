import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyTable from '../components/PropertyTable';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/properties')
      .then((response) => response.json())
      .then((properties) => setProperties(properties))
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/properties')
      .then((response) => response.json())
      .then((properties) => setProperties(properties))
  }, [toggle]);

  const updateProperties = () => setToggle((prev) => !prev);

  return (
    <div className='container '>
      <Link to='/properties/add' className='add-property-btn'>Add Property</Link>
      <h2>All properties</h2>
      <PropertyTable
        properties={properties}
        updateProperties={updateProperties}
      />
    </div>

  ); 
};

export default Properties;
