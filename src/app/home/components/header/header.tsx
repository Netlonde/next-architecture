"use client";

import Image from "next/image";
import useHeaderController from "./header.controller";
import Background from "./header.style";

import logo from "../../../../assets/images/Logo.svg";

export default function Header() {
  const { nameTest } = useHeaderController();
  return (
    <Background>
      <div className="logoContainer">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="rightButtonsContainer">
        <button className="rightButtons">Home</button>
        <button className="rightButtons">Landings</button>
        <button className="rightButtons">Pages</button>
        <button className="rightButtons">Docs</button>
        <button className="rightButtons">Help</button>
        <button className="rightButtons getitnow">Get it now</button>
      </div>
    </Background>
  );
}
