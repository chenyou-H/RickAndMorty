import React from "react";

import Card from "./Card";
import { CharactersArrayProps } from "@/types";

export default function CharacterTable({ characters }: CharactersArrayProps) {
  return (
    <section className="tableContainer">
      {characters?.map((character) => {
        return (
          <div className="card center tableContainer__item" key={character.id}>
            <Card character={character} />
          </div>
        );
      })}
    </section>
  );
}
