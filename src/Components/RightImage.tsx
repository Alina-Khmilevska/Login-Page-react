import React from 'react';
import Image from '../img/image.png';

const RightImage: React.FC = () => {
  return (
    <div className="right">
      <img src={Image} alt="Right Image" />
    </div>
  );
};

export default RightImage;
