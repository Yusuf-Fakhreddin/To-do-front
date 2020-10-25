import http from "./httpService";
import jwtDecode from "jwt-decode";

import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl;

export async function register(user) {
  let result = http.post(apiEndpoint + "/auth/register", {
    name: user.fullname,
    email: user.email,
    password: user.password,
  });
  let jwt = result.data.token;
  localStorage.setItem("token", jwt);
}

export async function login(user) {
  let result = await http.post(apiEndpoint + "/auth/login", {
    email: user.email,
    password: user.password,
  });
  let jwt = result.data.token;
  localStorage.setItem("token", jwt);
}

export async function logout(user) {
  localStorage.removeItem("token");
}

// for getting rid of Bi-directional dependencies
export function getJwt() {
  return localStorage.getItem("token");
}
http.setJwt(getJwt());

// only if the user was decoded into the token
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
