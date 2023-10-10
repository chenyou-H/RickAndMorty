import React from "react";

import Card from "./Card";
import { CharactersArrayProps } from "@/types";

export default function CharacterTable({ characters }: CharactersArrayProps) {
  return (
    <section className="tableContainer">
      {characters?.map((character) => {
        return <Card key={character.id} character={character} />;
      })}
    </section>
  );
}
