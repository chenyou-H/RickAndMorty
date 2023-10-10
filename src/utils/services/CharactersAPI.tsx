export const API_URL = "https://rickandmortyapi.com/api/character";

//fetch functioin created for useSwrd hook
export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  return res.json();
};

export const fetchCharacters = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export const fetchCharactersByPage = async (page: string) => {
  const res = await fetch(`${API_URL}/?page=${page}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
