import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import { fetchCharactersByPage } from "../utils/services/CharactersAPI";
import { CharacterTable, Pagination } from "@/components";
import usePagination from "@/utils/hook/usePagination";
import { CharacterProps } from "@/types";

interface CharactersPageProps {
  totalPages: number;
  characters: CharacterProps[];
  currentPage: number;
}

export const getServerSideProps: GetServerSideProps<
  CharactersPageProps
> = async ({ query }) => {
  try {
    const params = query.page as string;
    const currentPage = Number(params);
    const data = await fetchCharactersByPage(currentPage);
    return {
      props: {
        totalPages: data?.info?.pages,
        characters: data?.results,
        currentPage,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { totalPages: 0, characters: [], currentPage: 1 }, // Provide a default value if fetch fails
    };
  }
};

const targetUrl = "/characters/?page=";

export default function Characters({
  totalPages,
  characters,
  currentPage,
}: CharactersPageProps) {
  const paginationRange = usePagination({
    currentPage,
    totalPages,
  });

  return (
    <>
      <Head>
        <title>Rick and Morty Images List</title>
        <meta name="description" content="Rick and Morty Images List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="centerCol">
        <header className="center">
          <h1 className="halloween centerText">Rick And Morty Characters</h1>
        </header>

        <CharacterTable characters={characters} />

        <Pagination
          targetUrl={targetUrl}
          currentPage={currentPage}
          totalPages={totalPages}
          paginationRange={paginationRange}
        />
      </main>
    </>
  );
}
