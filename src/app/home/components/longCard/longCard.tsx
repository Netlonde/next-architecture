"use client";

import Image from "next/image";
import useLongCardController from "./longCard.controller";
import Background from "./longCard.style";

import airport from "../../../../assets/images/airport.jpg";

export default function LongCard() {
  const { nameTest } = useLongCardController();
  return (
    <Background>
      <Image src={airport} alt="airport" className="airportImage" />
    </Background>
  );
}
