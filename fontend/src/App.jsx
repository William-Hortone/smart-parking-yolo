import React, { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState({
    free: 0,
    used: 0,
    total: 0,
    income: 0,
    mySpotIndex: null,
  });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('http://localhost:8000/parking-status');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStatus({
          free: data.empty_spaces,
          used: data.occupied_spaces,
          total: data.total_spaces,
          income: status.income, // Assuming you fetch income separately
          mySpotIndex: data.my_spot_index,
        });
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Smart Parking Status</h1>
      <p>Total Spots: {status.total}</p>
      <p>Free Spots: {status.free}</p>
      <p>Used Spots: {status.used}</p>
      <p>Your Spot Index: {status.mySpotIndex}</p>
      <h2>Live Parking Feed</h2>
      <img
        src="http://localhost:8000/video"
        alt="Live Parking Feed"
        style={{ width: '100%', maxWidth: '800px', border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default App;
