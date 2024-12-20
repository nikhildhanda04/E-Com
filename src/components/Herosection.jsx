import { useState, useEffect } from 'react';
import Navbar from './navbar';

function Herosection() {
  const images = [
    { url: 'src/assets/HS1.jpg', text1: "Premium Comfort", text2: "New Collection", btntext: "Shop Now" },
    { url: 'src/assets/HS2.jpg', text1: "Best For You", text2: "Fall Arrival", btntext: "Check Out" },
    { url: 'src/assets/HS3.jpg', text1: "Look Your Best", text2: "Limited Edition", btntext: "Shop Now" },
    { url: 'src/assets/HS4.jpg', text1: "Better Than The Rest", text2: "Made For You", btntext: "Have a Look" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div
      className="w-full h-screen flex justify-center items-end py-40 opacity-90 text-white transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentIndex].url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    }}
    >   
      <div className="flex flex-col items-center text-center animate-fadeIn">
        <h2 className="text-[40px] font-semibold">{images[currentIndex].text1}</h2>
        <h1 className="text-[70px] font-bold">{images[currentIndex].text2}</h1>
        <button className="mt-4 px-6 py-2 text-[20px] bg-transparent border-2 border-white text-white rounded">
          {images[currentIndex].btntext}
        </button>
      </div>
    </div>
    </>
  );
}

export default Herosection;
