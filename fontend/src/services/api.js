const API_BASE = "http://localhost:8000"; 

export const fetchParkingStatus = async () => {
  const res = await fetch(`${API_BASE}/status`);
  if (!res.ok) throw new Error("Failed to fetch parking status");
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



