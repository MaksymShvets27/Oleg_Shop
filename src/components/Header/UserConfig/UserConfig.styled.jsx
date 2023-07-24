import styled from "styled-components";

export const UserConfigStr = styled.p`
 color: black;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;

  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 20px 10px;
  
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    color: green;
    border-color: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    padding: 10px 10px;
  }
  @media (min-width: 1440px) {
    padding: 15px 15px;

    font-size: 38px;`;

export const UserConfigDiv = styled.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`;
