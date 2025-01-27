import { useState, useEffect } from 'react';
import GuestTable from '../components/GuestTable';

const AdminPanel = ({ hotelId }) => {
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
      <h1 className="text-2xl font-semibold">{hotel.name} - Guest Management</h1>
      <GuestTable hotelId={hotelId} />
    </div>
  );
};

export default AdminPanel;
