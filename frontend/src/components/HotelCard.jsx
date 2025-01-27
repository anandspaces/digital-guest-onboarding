const HotelCard = ({ hotel, onGenerateQR }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold">{hotel.name}</h3>
      <p>{hotel.address}</p>
      <img src={hotel.logo} alt="Hotel Logo" className="w-32 h-32 object-cover" />
      <button
        onClick={() => onGenerateQR(hotel._id)}
        className="mt-2 text-blue-500"
      >
        Generate QR Code
      </button>
    </div>
  );
};

export default HotelCard;
