// import { baseURL } from "../constants";
import { users } from "../mock/users";

async function getAllUsers() {
  return new Promise((resolve) => {
    resolve(users);
  });
}

async function getUserById(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.user_id === id);
    if (typeof user === "undefined") resolve(user);
    else reject("No user found with ID: " + id);
  });
}

async function performLogin(email, password) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.email === email);
    // no password check
    if (typeof user !== "undefined") resolve(user);
    else reject("No user found with email: " + email);
  });
}

async function performRegister(userData) {
  return new Promise((resolve, reject) => {
    const { firstName, lastName, email, password } = userData;

    // TODO validation checks (minimun characters, valid email format, strong password...)
    if (firstName && lastName && email && password) {
      const userAlreadyRegistered = users.find((user) => user.email === email);
      if (userAlreadyRegistered) reject("This email already has an account: " + email);
      else {
        const newUserModel = { ...userData, user_id: users.length, markers: [] };
        users.push(newUserModel);
        resolve(newUserModel);
      }
    }
  });
}

export default {
  getAllUsers,
  getUserById,
  performLogin,
  performRegister,
};
