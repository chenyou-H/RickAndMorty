import React from "react";

import Card from "./Card";
import { CharactersArrayProps } from "@/types/types";

export default function Table({ data }: CharactersArrayProps) {
  return (
    <section className="container">
      {data?.map((character) => {
        return (
          <div className="card center" key={character.id}>
            <Card character={character} />;
          </div>
        );
      })}
    </section>
  );
}
