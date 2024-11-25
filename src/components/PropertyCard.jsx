import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './styles/PropertyCard.css';

const PropertyCard = ({
  address,
  price,
  numberOfBedrooms,
  numberOfBathrooms,
  hasGarden,
  images,
  status,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);    
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  let statusCls = 'status ';
  let statusText= '';

  if (status === 'SOLD') {
    statusCls += 'status-success';
    statusText = 'SOLD';
  } else if (status === 'FORSALE') {
    statusCls += 'status-warning';
    statusText = 'FOR SALE';
  } else {
    statusCls += 'status-danger';
    statusText = 'WITHDRAWN'
  }
  console.log('CURRENT: ', images[currentIndex])
  return (
    <div className='card'>
      <div className='carousel-container'>
        <button className='prev-button' onClick={prevImage}>
          <i className='fa fa-caret-left'></i>
        </button>
        <div className='carousel-images'>
          <div className={statusCls}>
            {statusText}
          </div>
          <img src={`/${images[currentIndex]}`} alt='carousel image' className='carousel-image' />
        </div>
        <button className='next-button' onClick={nextImage}>
          <i className='fa fa-caret-right'></i>
        </button>
      </div>
      <div className='address-container'>
        <b>{address}</b>
      </div>
      <div className='description-container'>
        {numberOfBedrooms} bedrooms, {numberOfBathrooms} bathrooms
        {hasGarden ? <p>With garden</p> : <></>}
      </div>
      <div className='price-container'>
        {price}
      </div>
    </div>
  );
};

export default PropertyCard;
