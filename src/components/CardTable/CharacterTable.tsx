import React from "react";

import Card from "./Card";
import { CharactersArrayProps } from "@/types/types";

export default function CharacterTable({ characters }: CharactersArrayProps) {
  return (
    <section className="container">
      {characters?.map((character) => {
        return (
          <div className="card center" key={character.id}>
            <Card character={character} />
          </div>
        );
      })}
    </section>
  );
}
