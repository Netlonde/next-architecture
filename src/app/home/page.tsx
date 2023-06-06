"use client";

import Image from "next/image";
import Header from "./components/header/header";
import useHomeController from "./home.controller";
import Background, { TopContainer } from "./home.style";

import topImage from "../../assets/images/top-image.jpg";
import LongCard from "./components/longCard/longCard";

export default function Home() {
  const { nameTest } = useHomeController();
  return (
    <Background>
      <TopContainer>
        <div className="blur" />
        <Image src={topImage} alt="top header" className="topImage" />
        <Header />
      </TopContainer>
      <main>
        <LongCard />
        <div>{nameTest}</div>
      </main>
    </Background>
  );
}
