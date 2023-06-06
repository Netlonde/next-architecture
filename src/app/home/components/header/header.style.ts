"use client";

import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1140px;
  height: 100px;

  .rightButtonsContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }

  .rightButtons {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .rightButtons:hover {
    opacity: 0.9;
  }

  .getitnow {
    border: 2px solid #fff;
    border-radius: 12px;
    padding: 10px 15px;
  }
`;

export default Background;
