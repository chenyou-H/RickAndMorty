// import React from "react";
// import { useRouter } from "next/router";

// export const getServerSideProps = async (context) => {
//   const characterPage = context.query.page;
//   console.log("my context: ", context);
//   // console.log("page: ", characterPage);
//   // const res = await fetch(
//   //   `https://rickandmortyapi.com/api/character/?page=${characterPage}`
//   // );
//   // const characters = await res.json();
//   return { props: { characters: characterPage } };
// };

// export default function index({ characters }) {
//   return <div>index{characters}</div>;
// }
