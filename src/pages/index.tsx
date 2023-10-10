import Head from "next/head";
import Image from "next/image";

import type { InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";
import usePagination from "@/lib/hook/usePagination";

export default function Home({
  characters,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const totalPages = 42;

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("result: ", result);
        setData(result);
      });
  }, [currentPage]);

  const paginationRange = usePagination({
    currentPage,
    totalPages: data?.info?.pages,
  });

  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  const handleClickNext = () => {
    setCurrentPage((prev) => {
      if (prev < totalPages) {
        return prev + 1;
      }
    });
  };

  const handleClickPrev = () => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
    });
  };

  console.log("current page is: ", currentPage);
  console.log("current page type is: ", typeof currentPage);

  return (
    <>
      <Head>
        <title>Rick and Morty Images List</title>
        <meta name="description" content="Rick and Morty Images List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <h1 className="center">Rick And Morty Characters</h1>
        <section>
          {data?.results?.map((character) => {
            return (
              <div key={character.id}>
                <Image
                  src={character.image}
                  alt={character.name}
                  width={300}
                  height={300}
                />
                <h5>{character.name}</h5>
              </div>
            );
          })}
        </section>
        <div>
          <button onClick={handleClickPrev}>left</button>
          {paginationRange?.map((page, index) => {
            if (typeof page !== "string") {
              return (
                <button
                  className="page__button"
                  onClick={() => {
                    handleClickPage(page);
                  }}
                  key={index}
                >
                  {page}
                </button>
              );
            } else {
              return <span key={index}>...</span>;
            }
          })}
          <button onClick={handleClickNext}>right</button>
        </div>
      </main>

      {/* <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  );
}
