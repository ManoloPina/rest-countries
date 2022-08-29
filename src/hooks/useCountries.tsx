import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCountries } from "api/countries";
//Types
import { QUERY_KEYS } from "constants";

export const useCountries = () => {
  const { data: countries, isLoading } = useQuery(
    [QUERY_KEYS.COUNTRIES],
    fetchCountries
  );
  return {
    countries,
    isLoading,
  };
};
