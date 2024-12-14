import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./getProducts";

export const useProductsQuery = () => {
  return useQuery({ queryKey: ["products"], queryFn: getProducts });
};
