import React, { useState } from 'react';
import './ImageGallery.css';

function ImageGallery() {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const openFullScreen = (imgSrc) => {
    setFullScreenImage(imgSrc);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="main-image-container left">
        <img 
          src="/images/ui2.png" 
          alt="Main Product" 
          className="main-image" 
          onClick={() => openFullScreen('/images/ui2.png')} 
        />
        <div className="product-image-container">
          <img 
            src="/images/ui1.png" 
            alt="Product 1" 
            className="product-image" 
            onClick={() => openFullScreen('/images/ui1.png')} 
          />
        </div>
        <div className="product-image-container">
          <img 
            src="/images/ui2.png" 
            alt="Product 2" 
            className="product-image" 
            onClick={() => openFullScreen('/images/ui2.png')} 
          />
        </div>
        <div className="product-image-container">
          <img 
            src="/images/ui4.png" 
            alt="Product 3" 
            className="product-image" 
            onClick={() => openFullScreen('/images/ui4.png')} 
          />
        </div>
      </div>
      <div className="main-image-container right">
        <img 
          src="/images/ui.png" 
          alt="Main Product 2" 
          className="main-image" 
          onClick={() => openFullScreen('/images/ui.png')} 
        />
        <div className="product-image-container">
          <img 
            src="/images/ui1.png" 
            alt="Product 4" 
            className="product-image" 
            onClick={() => openFullScreen('/images/ui1.png')} 
          />
        </div>
        <div className="product-image-container">
          <img 
            src="/images/ui4.png" 
            alt="Product 5" 
            className="product-image" 
            onClick={() => openFullScreen('/images/ui4.png')} 
          />
        </div>
        <div className="product-image-container">
          <img 
            src="/images/ui2.png" 
            alt="Product 6" 
            className="product-image" 
            onClick={() => openFullScreen('/images/ui2.png')} 
          />
        </div>
      </div>
      {fullScreenImage && (
        <div className="full-screen">
          <span className="close" onClick={closeFullScreen}>&times;</span>
          <img src={fullScreenImage} alt="Full Screen view" />
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
