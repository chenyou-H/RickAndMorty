import React from "react";
import Head from "next/head";

import { fetchCharactersByPage } from "../utils/services/CharactersAPI";
import { CharacterTable, Pagination } from "@/components";
import usePagination from "@/utils/hook/usePagination";

export const getServerSideProps = async (context) => {
  try {
    const currentPage = context.query.page;
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
      props: { totalPages: 0, characters: [], currentPage: "1" }, // Provide a default value if fetch fails
    };
  }
};

export default function Characters({ totalPages, characters, currentPage }) {
  const currentPageInNumber = Number(currentPage);

  const paginationRange = usePagination({
    currentPage: currentPageInNumber,
    totalPages,
  });

  return (
    <>
      <Head>
        <title>Rick and Morty Images List</title>
        <meta name="description" content="Rick and Morty Images List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className="center halloween">Rick And Morty Characters</h1>
        <CharacterTable characters={characters} />
        <Pagination
          currentPage={currentPageInNumber}
          totalPages={totalPages}
          paginationRange={paginationRange}
        />
      </main>
    </>
  );
}
