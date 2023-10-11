import React from "react";

import Card from "./Card";
import { CharactersArrayProps } from "@/types";

export default function CharacterTable({ characters }: CharactersArrayProps) {
  return (
    // <section className="table__container">
    //   {characters?.map((character) => {
    //     return <Card key={character.id} character={character} />;
    //   })}
    // </section>
    <section className="table__container">
      <div className="grid__container">
        {characters?.map((character) => {
          return <Card key={character.id} character={character} />;
        })}
      </div>
    </section>
  );
}
