import { ApiRequest, endpoints } from "@/utils";
import { AxiosError } from "axios";
import { ProductType } from "./types";

export function getProducts() {
  return ApiRequest.get<ProductType[], AxiosError<unknown>>(endpoints.PRODUCTS);
}
