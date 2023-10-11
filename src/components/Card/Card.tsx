import React from "react";

import { CharacterProps } from "@/types";

interface CardProps {
  character: CharacterProps;
}

export default function Card({ character }: CardProps) {
  return (
    <div className="card">
      <img className="card__image" src={character.image} alt={character.name} />
      <h2 className="card__name">{character.name}</h2>
    </div>
  );
}
