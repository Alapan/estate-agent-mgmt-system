import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import LargeScreenForm from '../components/LargeScreenForm';
import SmallScreenForm from '../components/SmallScreenForm';
import './styles/Home.css';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchMade, setIsSearchMade] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const minimumPrice = parseFloat(e.target.minimumPrice.value);
    const maximumPrice = parseFloat(e.target.maximumPrice.value);
    const hasGarden = e.target.hasGarden.value === 'true';
    const numberOfBathrooms = parseInt(e.target.numberOfBathrooms.value, 10);
    const numberOfBedrooms = parseInt(e.target.numberOfBedrooms.value, 10);

    fetch('http://localhost:8000/properties')
      .then((response) => response.json())
      .then((properties) => {
        const results = properties.filter((p) => {
          const price = parseFloat(p.price.substring(1))
          return (
            (p.hasGarden === hasGarden) &&
            (p.numberOfBedrooms === numberOfBedrooms) &&
            (p.numberOfBathrooms === numberOfBathrooms) &&
            (price >= minimumPrice && price <= maximumPrice)
          );
        });
        setSearchResults(results);
        setIsSearchMade(true);
      });
  };

  return (
    <>
      <div className='hero-overlay-container'>
        <div className='hero-heading'>Manage buyers and sellers easily.</div>
        <div className='form-container-lg'>
          <LargeScreenForm
            handleSubmit={handleSubmit}
            setSearchResults={setSearchResults}
            setIsSearchMade={setIsSearchMade}
          />
        </div>
      </div>
      <div className='form-container-sm'>
        <SmallScreenForm
          handleSubmit={handleSubmit}
          setSearchResults={setSearchResults}
          setIsSearchMade={setIsSearchMade}
        />
      </div>

      {
        searchResults.length > 0 ? (
          <div className='container'>
            <h2 className='search-results-heading'>Found {searchResults.length} properties</h2>
            <div className='search-results'>
              {searchResults.map((property) => (
                <PropertyCard key={property.id} {...property}/>
              ))}
            </div>
          </div>
        ) : (
          isSearchMade ? (<p className='no-results'>No results found.</p>) : null
        )
      }
    </>
  ); 
};

export default Home;
