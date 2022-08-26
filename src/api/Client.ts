import Axios from "axios";

export const apiClient = Axios.create({
  baseURL: "https://www.dnd5eapi.co",
});
