// import React from "react";
// import { useRouter } from "next/router";
// const _ = require("lodash");

// import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

// // export const getServerSideProps = async () => {
// //   const router = useRouter();
// //   const characterPage = router.query.characterPage;
// //   // console.log("page: ", characterPage);
// //   // const res = await fetch(
// //   //   `https://rickandmortyapi.com/api/character/?page=${characterPage}`
// //   // );
// //   // const characters = await res.json();
// //   return { props: { characters: characterPage } };
// // };

// export const getStaticPaths = async () => {
//   //   // const res = await fetch(
//   //   //   `https://rickandmortyapi.com/api/character`
//   //   // );
//   //   // const data = await res.json();

//   // const totalPage = data.info.pages;
//   const totalPage = 32;
//   const params = _.range(1, totalPage + 1);

//   // console.log("page array: ", params);

//   // const paths = params.map((param) => {
//   //   return {
//   //     params: { pageNo: param.toString() },
//   //   };
//   // });

//   const paths = params.map((param: number) => {
//     return {
//       params: { pageNo: "" + param.toString() },
//     };
//   });

//   return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const page = context.params.pageNo;

//   console.log("my page: ", context);

//   // const res = await fetch(
//   //   `https://rickandmortyapi.com/api/character/?page=${page}`
//   // );
//   // const data = await res.json();
//   // const characters = data.result;

//   return {
//     // props: { characters },
//     props: { characters: page },
//   };
// };

// export default function PageDetail({ characters }) {
//   // const router = useRouter();
//   // const characterPage = router.query.characterPage;
//   // console.log("page: ", characterPage);

//   return (
//     <div>
//       <h5>Rick And Morty</h5>
//       {characters}
//     </div>
//   );
// }
