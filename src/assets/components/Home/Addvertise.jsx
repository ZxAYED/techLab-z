import  { useState, useEffect } from 'react';

const images = [
  'https://i.ibb.co/RYcvFLQ/electronics-2.jpg',
  'https://i.ibb.co/Xbbqcdg/electronics-4.webp',
  'https://i.ibb.co/db12DRy/electronics-5.jpg',
];

const Addvertise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[40vw] h-[40vh]  my-10">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-fit rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Addvertise;
