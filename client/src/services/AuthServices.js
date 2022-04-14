import axios from "axios";
import API from "../api/api";

const AuthService = {
  register(data) {
    return new Promise((res, rej) => {
      axios
        .post(API.register(), {
          username: data.username,
          email: data.email,
          password: data.password,
        })
        .then(
          (response) => {
            return res(response);
          },
          (error) => {
            return rej(error);
          }
        );
    });
  },

  login(data) {
    return new Promise((res, rej) => {
      axios
        .post(API.login(), {
          email: data.email,
          password: data.password,
        })
        .then(
          (response) => {
            return res(response);
          },
          (error) => {
            return rej(error);
          }
        );
    });
  },
};

export default AuthService;
