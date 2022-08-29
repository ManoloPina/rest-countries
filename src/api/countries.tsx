import axios from "./axios";
import { AxiosResponse } from "axios";
//Types
import { ICountry } from "types/Countries";
import { API } from "constants";

export const fetchCountries = async (): Promise<ICountry[]> => {
  const res: AxiosResponse<ICountry[]> = await axios.get(API.GET_ALL_COUNTRIES);
  return res.data;
};
