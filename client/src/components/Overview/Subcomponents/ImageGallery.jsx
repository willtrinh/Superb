import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const GalleryWrapper = styled.div`
  padding-right: 1.5rem;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 80vh;
  cursor: -moz-zoom-in;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  padding-right: 10px;
`;

const Thumbnail = styled.img`
  justify-content: space-between;
  align-items: center;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin: 5px;
  object-fit: cover;
  opacity: 0.5;
`;

const ImageGallery = ({ photos, selectedStyle }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === selectedStyle.photos.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? selectedStyle.photos.length - 1 : current - 1);
  };

  if (!Array.isArray(selectedStyle.photos) || selectedStyle.photos.length === 0) {
    return null;
  }

  return (
    <section className="slider">
      <FontAwesomeIcon icon={faArrowLeft} className="left-arrow" onClick={prevSlide} />
      <FontAwesomeIcon icon={faArrowRight} className="right-arrow" onClick={nextSlide} />
      {selectedStyle.photos.map((photo, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (<Image src={photo.url} alt="product" />) }
        </div>
      ))}
    </section>
  );
};

export default ImageGallery;
