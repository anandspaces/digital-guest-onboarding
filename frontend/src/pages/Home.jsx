import { useState, useEffect } from 'react';
import HotelCard from '../components/HotelCard';

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hotels');
        if (!response.ok) {
          throw new Error('Failed to fetch hotels');
        }
        const data = await response.json();
        setHotels(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

    const handleGenerateQR = async (hotelId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/hotels/generate-qr/${hotelId}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('QR generation failed');
      }
      alert(`QR Code generated: ${data.qrCodeDataURL}`);
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {hotels.map(hotel => (
        <HotelCard key={hotel._id} hotel={hotel} onGenerateQR={handleGenerateQR} />
      ))}
    </div>
  );
};

export default Home;
