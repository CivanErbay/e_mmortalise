const baseURL = "http://localhost:8080";

export function getMarkers() {
  return new Promise((resolve) => {
    const markers = [
      [-3, 36.2],
      [-3.2, 36.8],
      [-3.23, 36.52],
      [12, 23],
      [13, 2],
    ];
    resolve(markers);
  });
}

export async function getMarkersCall() {
  const response = await fetch(`${baseURL}/api/v1/memories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("something went wrong!!!");
  }
  return await response.json();
}



export default {
  getMarkers,
  getMarkersCall,
};
