import React from "react";
import Image from "next/image";

import { CharacterProps } from "@/types/types";

export default function Card({ character }: CharacterProps) {
  return (
    <>
      <Image
        className="card__image"
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
      <h2 className="card__name">{character.name}</h2>
    </>
  );
}
