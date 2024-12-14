import { ApiRequest, endpoints } from "@/utils";

export function getProducts() {
 return  ApiRequest.get(endpoints.PRODUCTS);
}
