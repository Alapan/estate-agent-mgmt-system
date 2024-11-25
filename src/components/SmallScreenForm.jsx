import { useState } from 'react';
import './styles/SmallScreenForm.css';

const SmallScreenForm = ({
  handleSubmit,
  setSearchResults,
  setIsSearchMade
}) => {
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(0);
  const [hasGarden, setHasGarden] = useState(false);
  const [numberOfBedrooms, setNumberOfBedrooms] = useState(0);
  const [numberOfBathrooms, setNumberOfBathrooms] = useState(0);

  const resetForm = () =>{
    setMinimumPrice(0);
    setMaximumPrice(0);
    setHasGarden(false);
    setNumberOfBedrooms(0);
    setNumberOfBathrooms(0);
    setSearchResults([]);
    setIsSearchMade(false);
  };

  return (
    <div className='small-screen-form-container'>
      <h2>Search for properties</h2>
      <form onSubmit={handleSubmit} className='small-screen-form'>
        <div className='min-price-sm'>
          <input
            type='text'
            value={minimumPrice || ''}
            onChange={(e) => setMinimumPrice(e.target.value)}
            className='form-input-sm'
            name='minimumPrice'
            placeholder='Minimum Price (£)'
          />
        </div>
        <div className='max-price-sm'>
          <input
            type='text'
            value={maximumPrice || ''}
            onChange={(e) => setMaximumPrice(e.target.value)}
            className='form-input-sm'
            name='maximumPrice'
            placeholder='Maximum Price (£)'
          />
        </div>
        <div className='garden-radio-group-sm'>
          <label className='garden-label-sm'>Garden </label>
          <label>
            <input
              name='hasGarden'
              type='radio'
              id='yes'
              value='Yes'
              checked={hasGarden === true}
              onChange={() => setHasGarden(true)}
            /> Yes
          </label>
          <label>
            <input
              name='hasGarden'
              type='radio'
              id='no'
              value='no'
              checked={hasGarden === false}
              onChange={() => setHasGarden(false)}
            /> No
          </label>
        </div>
        <div className='bedrooms-dropdown-sm'>
          <label>Bedrooms </label>
          <select
            value={numberOfBedrooms}
            name='numberOfBedrooms'
            onChange={(e) => setNumberOfBedrooms(e.target.value)}
            className='form-select-sm'
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div className='bathrooms-dropdown-sm'>
          <label>Bathrooms </label>
          <select
            value={numberOfBathrooms}
            name='numberOfBathrooms'
            onChange={(e) => setNumberOfBathrooms(e.target.value)}
            className='form-select-sm'
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <button type='reset' className='form-button-reset-sm' onClick={resetForm}>
          RESET
        </button>
        <button type='submit' className='form-button-search-sm'>
          SEARCH
        </button>
      </form>
    </div>
  ); 
};

export default SmallScreenForm;
