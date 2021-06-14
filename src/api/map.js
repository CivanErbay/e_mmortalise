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

export default {
  getMarkers,
};
