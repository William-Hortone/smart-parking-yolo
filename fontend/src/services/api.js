const API_BASE = "http://localhost:8000"; // Adjust to your backend URL

export const fetchParkingStatus = async () => {
  const res = await fetch(`${API_BASE}/parking-status`);
  return res.json();
};

export const fetchCameraFrame = async () => {
  const res = await fetch(`${API_BASE}/camera-frame`);
  const data = await res.json();
  return `data:image/jpeg;base64,${data.image}`;
};

export const fetchTotalIncome = async () => {
  const res = await fetch(`${API_BASE}/total-income`);
  return res.json();
};
