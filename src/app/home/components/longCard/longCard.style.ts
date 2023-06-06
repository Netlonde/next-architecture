"use client";

import styled from "styled-components";

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1140px;
  height: 100px;
  filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.12));

  .airportImage {
    z-index: 100;
    /* margin-top: 800px; */
    width: 400px;
    height: 300px;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
`;

export default Background;
