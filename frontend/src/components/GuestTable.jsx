import { useState, useEffect } from 'react';

const GuestTable = ({ hotelId }) => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const fetchGuests = async () => {
      const response = await fetch(`/api/guests/${hotelId}`);
      const data = await response.json();
      setGuests(data);
    };
    fetchGuests();
  }, [hotelId]);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Mobile Number</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {guests.map(guest => (
            <tr key={guest._id}>
              <td className="px-4 py-2">{guest.fullName}</td>
              <td className="px-4 py-2">{guest.mobileNumber}</td>
              <td className="px-4 py-2">{guest.email}</td>
              <td className="px-4 py-2">
                <button className="bg-yellow-500 text-white p-2 rounded">Edit</button>
                <button className="bg-blue-500 text-white p-2 rounded ml-2">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestTable;
