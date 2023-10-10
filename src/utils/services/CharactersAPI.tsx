export const API_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharactersByPage = async (page: string) => {
  const res = await fetch(`${API_URL}/?page=${page}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
