import { useState } from 'react';

const GuestForm = ({ hotelId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    address: '',
    purpose: 'Business',
    stayFrom: '',
    stayTo: '',
    email: '',
    idProofNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call to submit the guest form
    const response = await fetch(`/api/guests/${hotelId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Thank you for registering!');
    } else {
      alert('Failed to register. Try again.');
    }
  };

  return (
    <div className="p-6 border rounded shadow-md">
      <h2 className="text-2xl mb-4">Guest Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-2 border rounded mb-2"
        />
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="Business">Business</option>
          <option value="Personal">Personal</option>
          <option value="Tourist">Tourist</option>
        </select>
        <input
          type="date"
          name="stayFrom"
          value={formData.stayFrom}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="date"
          name="stayTo"
          value={formData.stayTo}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          name="idProofNumber"
          value={formData.idProofNumber}
          onChange={handleChange}
          placeholder="ID Proof Number"
          className="w-full p-2 border rounded mb-4"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GuestForm;
