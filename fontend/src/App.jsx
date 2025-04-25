import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Smart Parking Status</h1>
      <img
        src="http://localhost:8000/video"
        alt="Parking Lot Stream"
        style={{ width: '100%', maxWidth: '800px' }}
      />
    </div>
  );
}

export default App;
