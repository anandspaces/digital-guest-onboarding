import { useState, useEffect } from 'react';
import GuestForm from '../components/GuestForm';

const HotelLandingPage = ({ hotelId }) => {
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      const response = await fetch(`/api/hotels/${hotelId}`);
      const data = await response.json();
      setHotel(data);
    };

    fetchHotel();
  }, [hotelId]);

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">{hotel.name}</h1>
      <img src={hotel.logo} alt="Hotel Logo" className="w-32 h-32 object-cover mt-4" />
      <p>{hotel.address}</p>
      <GuestForm hotelId={hotelId} />
    </div>
  );
};

export default HotelLandingPage;
