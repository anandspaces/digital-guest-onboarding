import { useState, useEffect } from 'react';
import HotelCard from '../components/HotelCard';

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const response = await fetch('/api/hotels');
      const data = await response.json();
      setHotels(data);
    };
    fetchHotels();
  }, []);

  const handleGenerateQR = async (hotelId) => {
    const response = await fetch(`/api/hotels/generate-qr/${hotelId}`);
    const data = await response.json();
    alert(`QR Code generated: ${data.qrCodeDataURL}`);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {hotels.map(hotel => (
        <HotelCard key={hotel._id} hotel={hotel} onGenerateQR={handleGenerateQR} />
      ))}
    </div>
  );
};

export default Home;
