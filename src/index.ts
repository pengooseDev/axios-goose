import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class AxiosGooose {
  #instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.#instance = axios.create({ ...config });
  }
}
