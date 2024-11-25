import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './styles/AddPropertyForm.css';

const AddPropertyForm = () => {
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState(0);
  const [numberOfBedrooms, setNumberOfBedrooms] = useState(0);
  const [numberOfBathrooms, setNumberOfBathrooms] = useState(0);
  const [hasGarden, setHasGarden] = useState(false);
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState(-1);
  const [imageFile1, setImageFile1] = useState('');
  const [imageFile2, setImageFile2] = useState('');
  const navigate = useNavigate();

  useEffect(() =>{
    fetch('http://localhost:8000/sellers')
      .then((response) => response.json())
      .then((sellers) => setSellers(sellers));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const property = {
      address,
      price: `£${price}`,
      numberOfBedrooms,
      numberOfBathrooms,
      hasGarden,
      sellerId,
      status: 'FORSALE',
      images: [
        imageFile1,
        imageFile2,
      ],
    };

    fetch('http://localhost:8000/properties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(property)
    }).then(() => navigate(`/properties`));
  };

  return (
    <div className='container'>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div className='property-form-field address'>
          <label>Address: </label>
          <input
            type='text'
            value={address}
            placeholder='Enter full address in one line'
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className='property-form-field price'>
          <label>Price: £</label>
          <input
            type='text'
            value={price}
            placeholder='Enter price'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className='property-form-field'>
          <label>Number of bedrooms: </label>
          <select
            value={numberOfBedrooms}
            onChange={(e) => setNumberOfBedrooms(e.target.value)}
            className='bedroom-dropdown-cls'
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>

        <div className='property-form-field'>
          <label>Number of bathrooms: </label>
          <select
            value={numberOfBathrooms}
            onChange={(e) => setNumberOfBathrooms(e.target.value)}
            className='bathroom-dropdown-cls'
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>

        <div className='property-form-field'>
          <label>Does it have a garden?</label>
          <input
            id='yes'
            type='radio'
            value='Yes'
            checked={hasGarden === true}
            onChange={() => setHasGarden(true)}
          />
          <label htmlFor='yes'>Yes</label>
          <input
            id='no'
            type='radio'
            value='No'
            checked={hasGarden === false}
            onChange={() => setHasGarden(false)}
          />
          <label htmlFor='no'>No</label>
        </div>

        <div className='property-form-field'>
          <label>Select seller</label>
          <select
            value={sellerId}
            required
            onChange={(e) => setSellerId(e.target.value)}
            className='seller-dropdown-cls'
          >
            <option
              value=''
            ></option>
            {sellers.map((seller) => (
              <option
                key={seller.id}
                value={seller.id}
              >{seller.firstName} {seller.lastName}</option>
            ))}
          </select>
        </div>
        <div className='property-form-field'>
          <label>Upload image 1</label>
          <input
            type='file'
            id='file1'
            onChange={(e) => setImageFile1(e.target.value.match(/[^\\/]*$/)[0])}
          />
        </div>
        <div className='property-form-field'>
          <label>Upload image 2</label>
          <input
            type='file'
            id='file2'
            onChange={(e) => setImageFile2(e.target.value.match(/[^\\/]*$/)[0])}
          />
        </div>
        <button type='submit' className='property-form-btn'>ADD PROPERTY</button>
      </form>
    </div>
  ); 
};

export default AddPropertyForm;
