import fetch from "cross-fetch";
import Swal from "sweetalert2";
import { host, token } from "./env";

export const apiRequest = async (url, type) => {
  try {
    const response = await fetch(host + url, {
      method: type,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json charset=utf-8",
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginAuth = async (user, password) => {
  try {
    const response = await fetch(
      host + `login?username=${user}&password=${password}`,
      {
        method: "POST",
      }
    );

    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.token;
    } else {
      const jsonResponse = await response.json();
      
      Swal.fire({
        title: "Invalid user or password",
        icon: "error",
        confirmButtonText: "Try again",
        confirmButtonColor: "#135846",
      });
    }
  } catch (error) {
    console.error(error);
  }
};
