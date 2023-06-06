"use client";
import topImage from "../../assets/images/top-image.jpg";

import styled from "styled-components";

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const TopContainer = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  position: relative;
  overflow: hidden;

  .blur {
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.25;
  }

  .topImage {
    height: auto;
    width: 100%;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
    margin-top: 300px;
  }
`;

export default Background;
