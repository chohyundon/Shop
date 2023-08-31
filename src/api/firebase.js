import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const database = getDatabase();
const auth = getAuth();

export async function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export async function logout() {
  return signOut(auth).then(() => null);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const upDateUser = user ? await AdminUser(user) : null;
    callback(upDateUser);
  });
}

// export async function getData() {
//   return get(ref(database, "product")).then((snapshot) => {
//     if (snapshot.exists()) {
//       return Object.values(snapshot.val());
//     }
//     return [];
//   });
// }

export function AdminUser(user) {
  return get(ref(database, "admins")).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}

export function writeUserData(product, imageUrl) {
  return set(ref(database, `product/${uuid()}`), {
    ...product,
    id: uuid(),
    price: parseInt(product.price),
    image: imageUrl,
    option: product.option,
  });
}

export async function getData() {
  return get(ref(database, "product")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}
