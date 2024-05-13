import { create } from "zustand";
import instance from "../components/api/axios/axios";

const checkLogin = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  } else {
    return true;
  }

  //   const jwtPayload = JSON.parse(token?.split(".")[1]);

  //   console.log(jwtPayload, "jwt");

  //   const isExpired = Date.now() >= jwtPayload.exp * 1000;

  //   if (token) {
  //     return true;
  //   } else {
  //     localStorage.removeItem("token");
  //     return false;
  //   }
};

const useAuthContext = create((set) => ({
  firstName: "",
  lastName: "",
  role: "",
  token: checkLogin(),
  loading: false,

  logIn: async (data) => {
    set({ loading: true });
    const response = await instance.post("auth/login/", data);
    set({ loading: false });
    console.log("response", response);
    localStorage.setItem("token", response.data.Token);
    set({
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      username: response.data.username,
    });

    const tokenInLocalStorage = localStorage.getItem("token");

    tokenInLocalStorage ? set({ token: true }) : set({ token: false });
  },
  logOut: async () => {
    localStorage.removeItem("token");
    set({ token: false });
  },
}));

export default useAuthContext;
