import { toast } from "react-toastify";
import instance from "./instance";

export const getProductsApi = async () => {
  try {
    const res = await instance.get(`/e-commerce/products`);
    return res.data;
  } catch (error) {
    toast.error("failed to fetch products");
  }
};

export const getProductsByCategoryApi = async (params) => {
  try {
    const res = await instance.get(
      `/e-commerce/products?category=${params.category}`
    );
    return res.data;
  } catch (e) {
    toast.error(`Failed to fetch Products!`);
  }
};
