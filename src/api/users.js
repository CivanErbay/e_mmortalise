// import { baseURL } from "../constants";

async function getAllUsers() {
  return Promise.resolve(getLocalUsers());
}

async function getUserById(id) {
  return new Promise((resolve, reject) => {
    const user = getLocalUsers().find((user) => user.user_id === id);
    if (typeof user !== "undefined") resolve(user);
    else reject("No user found with ID: " + id);
  });
}

async function performLogin(email, password) {
  return new Promise((resolve, reject) => {
    const user = getLocalUsers().find((user) => user.email === email);

    // no password check
    if (user) resolve(user);
    else reject("No user found with email: " + email);
  });
}

async function performRegister(userData) {
  return new Promise((resolve, reject) => {
    const { firstName, lastName, email, password } = userData;

    // TODO validation checks (minimun characters, valid email format, strong password...)
    if (firstName && lastName && email && password) {
      const localUsers = getLocalUsers() || [];
      const userAlreadyRegistered = localUsers.find((user) => user.email === email);

      if (userAlreadyRegistered) reject("This email already has an account: " + email);
      else {
        const user_id = localUsers.length;
        const newUserModel = { ...userData, user_id, markers: [] };
        // save to local storage
        setLocalUsers([...localUsers, newUserModel]);
        resolve(newUserModel);
      }
    }
  });
}

// returns an array
function getLocalUsers() {
  return JSON.parse(localStorage.getItem("users"));
}

// takes an array
function setLocalUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export default {
  getAllUsers,
  getUserById,
  performLogin,
  performRegister,
};
