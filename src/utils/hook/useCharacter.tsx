import React from "react";
import useSWR from "swr";
import { fetcher, API_URL } from "../services/CharactersAPI";

export default function useCharacter(page: number) {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/?page=${page}`,
    fetcher
  );

  return {
    characters: data?.results,
    isLoading,
    isError: error,
  };
}
