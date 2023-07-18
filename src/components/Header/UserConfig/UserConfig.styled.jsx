import styled from "styled-components";

export const UserConfigStr = styled.p`
 color: black;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;

  &.active {
    color: green;
  }

  &:hover {
    color: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;`;
