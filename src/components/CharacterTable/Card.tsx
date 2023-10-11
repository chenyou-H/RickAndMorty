import React from "react";
import Image from "next/image";

import { CharacterProps } from "@/types";

interface CardProps {
  character: CharacterProps;
}

export default function Card({ character }: CardProps) {
  return (
    <div className="card">
      {/* <div className="card__imageContainer"> */}
      {/* <Image
        className="card__image"
        src={character.image}
        alt={character.name}
        // width={300}
        // height={300}
        fill
      /> */}
      <img
        className="card__image"
        src={character.image}
        alt={character.name}
        // width={300}
        // height={300}
      />
      {/* </div> */}
      <h2 className="card__name">{character.name}</h2>
    </div>
  );
}
