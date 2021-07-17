// import { baseURL } from "../constants";
import { markers } from "../mock/markers";

export async function getAllMarkers() {
  // mock
  return new Promise((resolve) => {
    resolve(markers);
  });

  // const response = await fetch(`${baseURL}/api/v1/memories`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // if (response.status !== 200) {
  //   throw new Error("something went wrong!!!");
  // }
  // return await response.json();
}

export async function getMarkerById(id) {
  // mock
  return new Promise((resolve, reject) => {
    const marker = markers.find((marker) => marker.marker_id === id);
    if (typeof marker === "undefined") resolve(marker);
    else reject("No marker found with ID: " + id);
  });
}

export async function getUserMarkers(user_id) {
  // mock
  return new Promise((resolve, reject) => {
    const userMarkers = markers.filter((marker) => marker.user_id === user_id);
    resolve(userMarkers);
  });
}
