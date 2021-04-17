import axios from "axios";

class BaseController {
  token = "";
  role;
  api;

  constructor({ baseURL, timeout }) {
    this.api = axios.create({
      baseURL: baseURL,
      timeout: timeout,
      headers: { "Content-Type": "application/json" },
    });

    this.api.interceptors.request.use((prevConfig) => {
      const { ...config } = prevConfig;
      config.headers.Authorization = this.token;
      return config;
    });
  }

  setToken = (token, type = "Bearer") => {
    this.token = `${type} ${token}`;
  };

  login = async (username, password)=> {
    const { data } = await this.api.post("/auth/login", {
      username,
      password,
    });
    this.setToken(data.access_token);

    return {
      token: data.access_token,
      user: data.user,
    };
  };
}

export default BaseController;
