// import Head from "next/head";
// import { useState } from "react";
// import usePagination from "@/utils/hook/usePagination";
// import { CharacterTable, Pagination } from "@/components";
// import { CharactersArrayProps } from "@/types/types";
// import useCharacter from "@/utils/hook/useCharacter";
// import { fetchCharacters } from "../utils/services/CharactersAPI";

// interface HomeProps {
//   totalPages: number;
//   characters: CharactersArrayProps;
// }

// export const getServerSideProps = async () => {
//   try {
//     const data = await fetchCharacters();

//     return {
//       props: {
//         totalPages: data?.info?.pages,
//         characters: { data: data?.results },
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: { totalPages: 0, characters: { data: [] } }, // Provide a default value if fetch fails
//     };
//   }
// };

// export default function Home({ totalPages }: HomeProps) {
//   const [currentPage, setCurrentPage] = useState(1);

//   const paginationRange = usePagination({
//     currentPage,
//     totalPages,
//   });

//   const { characters, isLoading } = useCharacter(currentPage);

//   if (isLoading) return <h1>Loading</h1>;

//   const handleClickPage = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleClickNext = () => {
//     setCurrentPage((prev) => {
//       if (prev < totalPages) {
//         return prev + 1;
//       }
//       return prev;
//     });
//   };

//   const handleClickPrev = () => {
//     setCurrentPage((prev) => {
//       if (prev > 1) {
//         return prev - 1;
//       }
//       return prev;
//     });
//   };

//   return (
//     <>
//       <Head>
//         <title>Rick and Morty Images List</title>
//         <meta name="description" content="Rick and Morty Images List" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       <main>
//         <h1 className="center halloween">Rick And Morty Characters</h1>
//         <CharacterTable data={characters} />
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           handleClickNext={handleClickNext}
//           handleClickPage={handleClickPage}
//           handleClickPrev={handleClickPrev}
//           paginationRange={paginationRange}
//         />
//       </main>
//     </>
//   );
// }

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty Character Images Entry</title>
        <meta name="description" content="Rick and Morty Character Images" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="center halloweenContainer">
        <Link className="center halloween" href="/characters/?page=1">
          View Rick And Morty Characters
        </Link>
      </main>
    </>
  );
}
