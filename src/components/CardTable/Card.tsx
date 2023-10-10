import React from "react";
import Image from "next/image";

import { CharacterProps } from "@/types";

interface CardProps {
  character: CharacterProps;
}

export default function Card({ character }: CardProps) {
  return (
    <div className="card center">
      <Image
        className="card__image"
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
      <h2 className="card__name">{character.name}</h2>
    </div>
  );
}
