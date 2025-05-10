import { useQuery } from "@tanstack/react-query";
import { getProductsApi, getProductsByCategoryApi } from "../api";

export const useAllProducts = () => {
  return useQuery({
    queryKey: ["all-products"],
    queryFn: getProductsApi,
  });
};

export const useProductsByCategory = (params) => {
  return useQuery({
    queryFn: () => getProductsByCategoryApi(params),
    queryKey: ["products", params],
    enabled: !!params?.category,
  });
};
