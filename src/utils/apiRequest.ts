import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";

abstract class Base {
  protected static DEFAULT_API_CONFIG: AxiosRequestConfig = {
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    paramsSerializer: (params: Record<string, unknown>) =>
      qs.stringify(params, { indices: false }),
  };

  protected static instance: AxiosInstance = axios.create(
    this.DEFAULT_API_CONFIG
  );

  static addConfig(configs?: AxiosRequestConfig) {
    return { ...this.DEFAULT_API_CONFIG, ...configs };
  }
}

export default abstract class ApiRequest extends Base {
  private static async send<Response, Error>(
    url: string,
    config?: AxiosRequestConfig
  ) {
    try {
      const conf = this.addConfig(config);
      const response = await ApiRequest.instance.request<
        Response,
        AxiosResponse<Response>,
        Error
      >({
        ...conf,
        url,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static get<Response, Error>(url: string, config?: AxiosRequestConfig) {
    return this.send<Response, Error>(url, { ...config, method: "get" });
  }

  static post<Response, Error>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return this.send<Response, Error>(url, { ...config, method: "post", data });
  }

  static put<Response, Error>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return this.send<Response, Error>(url, { ...config, method: "put", data });
  }

  static patch<Response, Error>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return this.send<Response, Error>(url, { ...config, method: "put", data });
  }

  static delete<Response, Error>(url: string, config?: AxiosRequestConfig) {
    return this.send<Response, Error>(url, { ...config, method: "delete" });
  }
}
