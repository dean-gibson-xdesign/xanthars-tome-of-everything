import { apiClient } from "./Client";

export const getItems = async (): Promise<Response> => {
  const response = await apiClient.get("api/items");
  return response.data;
};
