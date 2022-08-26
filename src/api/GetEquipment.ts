import { apiClient } from "./Client";

export const getSpells = async (): Promise<Response> => {
  const response = await apiClient.get("api/equipment");
  return response.data;
};
