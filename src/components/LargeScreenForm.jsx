import { useState } from 'react';
import './styles/LargeScreenForm.css';

const LargeScreenForm = ({
  handleSubmit,
  setSearchResults,
  setIsSearchMade,
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
    <>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='min-price'>
          <label>Minimum Price (£)</label>
          <input
            type='text'
            value={minimumPrice}
            onChange={(e) => setMinimumPrice(e.target.value)}
            className='form-input'
            name='minimumPrice'
          />
        </div>
        <div className='max-price'>
          <label>Maximum Price (£)</label>
          <input
            type='text'
            value={maximumPrice}
            onChange={(e) => setMaximumPrice(e.target.value)}
            className='form-input'
            name='maximumPrice'
          />
        </div>
        <div className='garden-radio-group'>
          <label className='garden-label'>Garden </label>
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
        <div className='bedrooms-dropdown'>
          <label className='select-label'>Bedrooms </label>
          <select
            value={numberOfBedrooms}
            name='numberOfBedrooms'
            onChange={(e) => setNumberOfBedrooms(e.target.value)}
            className='form-select'
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div className='bathrooms-dropdown'>
          <label className='select-label'>Bathrooms </label>
          <select
            value={numberOfBathrooms}
            name='numberOfBathrooms'
            onChange={(e) => setNumberOfBathrooms(e.target.value)}
            className='form-select'
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <button type='reset' className='form-button-reset' onClick={resetForm}>
          Reset
        </button>
        <button type='submit' className='form-button-search'>
          Search
        </button>
      </form>
    </>

  )  
};

export default LargeScreenForm;