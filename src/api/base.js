import axios from "axios";

class BaseController {
  constructor({ baseURL, timeout }) {
    this.api = axios.create({
      baseURL,
      timeout,
      headers: { "Content-Type": "application/json" }
    });

    this.api.interceptors.request.use((prevConfig) => {
      const { ...config } = prevConfig;
      config.headers.Authorization = this.token;
      return config;
    });
  }

  setToken(token, type = "Bearer") {
    this.token = `${type} ${token}`;
  }

  async resetDB(key) {
    const { data } = await this.api.get(`/test/reset-database?key=${key}`);

    return data;
  }

  async login(username, password) {
    const { data } = await this.api.post("/auth/login", {
      username,
      password
    });
    this.setToken(data.access_token);

    return {
      token: data.access_token,
      user: data.user
    };
  }
}

export default BaseController;
