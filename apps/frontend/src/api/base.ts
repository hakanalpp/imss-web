import axios, { AxiosInstance } from "axios";
import UserRole from "../types/UserRole";

interface AuthData {
  token: string;
  user: UserData;
}

interface UserData {
  id: number;
  username: string;
  role: UserRole;
  name: string;
  surname: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = new (...args: any[]) => T;

class BaseController {
  private token = "";

  protected role: UserRole | undefined;

  protected api: AxiosInstance;

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

  setToken = (token: string, type = "Bearer"): void => {
    this.token = `${type} ${token}`;
  };

  login = async (username: string, password: string): Promise<AuthData> => {
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
