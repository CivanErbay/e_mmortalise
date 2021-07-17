// import { baseURL } from "../constants";
import { users } from "../mock/users";

export async function getAllUsers() {
  return new Promise((resolve) => {
    resolve(users);
  });
}

export async function getUserById(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.user_id === id);
    if (typeof user === "undefined") resolve(user);
    else reject("No user found with ID: " + id);
  });
}
