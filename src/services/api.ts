import axios from "axios";
import Reactotron from "../../ReactotronConfig";
import { convertResponse } from "@/helpers";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

instance.interceptors.response.use(
  (response: any) => {
    if (process.env.NODE_ENV === "development") {
      response.config.metadata = {
        endTime: new Date(),
      };
      const [request, responseInfo, duration] = convertResponse(response);
      Reactotron.apiResponse?.(request, responseInfo, duration);
    }
    return response;
  },
  async (error) => {
    if (process.env.NODE_ENV === "development") {
      if (error.message === "Network Error") {
        return Promise.reject(error);
      }
      error.response.config.metadata = {
        endTime: new Date(),
      };
      const [request, responseInfo, duration] = convertResponse(error.response);
      Reactotron.apiResponse?.(request, responseInfo, duration);
    }

    return Promise.reject(error);
  }
);
