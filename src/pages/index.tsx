import Head from "next/head";
import { useEffect, useState } from "react";
import usePagination from "@/lib/hook/usePagination";
import { Table, Pagination } from "@/components";
import { CharactersArrayProps } from "@/types/types";

const API_URL = "https://rickandmortyapi.com/api/character";

interface HomeProps {
  totalPages: number;
  characters: CharactersArrayProps;
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    return {
      props: {
        totalPages: data?.info?.pages,
        characters: { data: data?.results },
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { totalPages: 0, characters: { data: [] } }, // Provide a default value if fetch fails
    };
  }
};

export default function Home({ totalPages, characters }: HomeProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(characters.data);

  const paginationRange = usePagination({
    currentPage,
    totalPages,
  });

  const fetchData = async (page: number) => {
    try {
      const res = await fetch(`${API_URL}/?page=${page}`);
      const jsonRes = await res.json();
      setData(jsonRes.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleClickNext = () => {
    setCurrentPage((prev) => {
      if (prev < totalPages) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleClickPrev = () => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <>
      <Head>
        <title>Rick and Morty Images List</title>
        <meta name="description" content="Rick and Morty Images List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <h1 className="center">Rick And Morty Characters</h1>
        <Table data={data} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleClickNext={handleClickNext}
          handleClickPage={handleClickPage}
          handleClickPrev={handleClickPrev}
          paginationRange={paginationRange}
        />
      </main>
    </>
  );
}
