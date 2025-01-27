const api = {
  getHotels: async () => {
    const response = await fetch('/api/hotels');
    return response.json();
  },
  getGuests: async (hotelId) => {
    const response = await fetch(`/api/guests/${hotelId}`);
    return response.json();
  },
  createGuest: async (hotelId, guestData) => {
    const response = await fetch(`/api/guests/${hotelId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(guestData),
    });
    return response.json();
  }
};

export default api;
