// import { baseURL } from "../constants";
import mockedUsers from "../mock/users";

async function getAllUsers() {
  return Promise.resolve(getMockedAndLocalUsers());
}

async function getUserById(id) {
  return new Promise(async (resolve, reject) => {
    const user = (await getAllUsers()).find((user) => user.user_id === id);
    if (typeof user !== "undefined") resolve(user);
    else reject("No user found with ID: " + id);
  });
}

async function performLogin(email, password) {
  return new Promise(async (resolve, reject) => {
    const user = (await getAllUsers()).find((user) => user.email === email);

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
      const localUsers = getLocalUsers();
      const userAlreadyRegistered = localUsers.find((user) => user.email === email);

      if (userAlreadyRegistered) reject("This email already has an account: " + email);
      else {
        const user_id = localUsers.length;
        const newUserModel = { ...userData, user_id, memories: [] };
        // save to local storage
        setLocalUsers([...localUsers, newUserModel]);
        resolve(newUserModel);
      }
    } else {
      reject("Please fill in all the fields");
    }
  });
}

// add memory to user model
async function saveMemory(memoryData, user_id) {
  const userModel = await getUserById(user_id);
  const newMemory = { ...memoryData, memory_id: userModel.memories.length, user_id };
  userModel.memories = [...userModel.memories, newMemory];

  updateLocalUser(userModel);

  return Promise.resolve(newMemory);
}

async function getAllMemories() {
  const allUsers = await getAllUsers();
  const allMemories = allUsers.reduce((acc, curr) => [...acc, ...curr.memories], []);
  return allMemories;
}

// returns an array
function getLocalUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// get mock and local users
function getMockedAndLocalUsers() {
  return [...mockedUsers, ...getLocalUsers()];
}

// takes an array
function setLocalUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function updateLocalUser(userModel) {
  const updatedUsers = getLocalUsers().map((user) => {
    if (user.user_id === userModel.user_id) {
      user = userModel;
    }
    return user;
  });
  setLocalUsers(updatedUsers);
}

export default {
  getAllUsers,
  getUserById,
  performLogin,
  performRegister,
  addMemory: saveMemory,
  getAllMemories,
};
