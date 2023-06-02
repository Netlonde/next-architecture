import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IAxiosRequestConfig extends AxiosRequestConfig {
  metadata?: {
    startTime?: Date;
    endTime?: Date;
  };
}
