import axios, { AxiosInstance } from "axios";
import UserRole from "../types/UserRole";

interface authData {
    token: string;
    user: userData;
}

interface userData {
    id: number,
    username: string,
    role: UserRole,
    name: string,
    surname: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = new (...args: any[]) => T;

class BaseController {
    private token = "";

    protected role: UserRole | undefined;

    protected api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            timeout: 20000,
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

    login = async (username: string, password: string): Promise<authData> => {
        const { data } = await this.api.post("token", {
            username,
            password,
        });

        return {
            token: data.access_token,
            user: data.user,
        };
    };
}

export default BaseController;
