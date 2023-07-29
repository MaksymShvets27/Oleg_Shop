import styled from "styled-components";
import { GrFormTrash } from "react-icons/gr";

export const CashListStyled = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 10px;
  position: reletive;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`;

export const CashCardImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid black;

  background-position: 50% 50%;
  background-size: cover;
  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
  @media (min-width: 1440px) {
    width: 360px;
    height: 360px;
  }
`;

export const CashListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 110px;
  font-size: 12px;
  font-weight: bolder;
  justify-content: space-around;
  align-items: center;

  padding: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    font-size: 24px;
    height: 250px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
    height: 400px;
  }
`;

export const CashCardInfo = styled.div`
  width: 50%;
`;

export const CashCardTitle = styled.h3``;

export const CashCardPrice = styled.p``;

export const CashCardTrashButton = styled.button`
  height: 90%;
  width: 10%;
  background: black;
  border-radius: 28px;
  padding: 0;

  transition: background 0.25s;

  &:hover {
    background: red;
  }
  &:focus {
    background: red;
  }
`;

export const StyledGrFormDelete = styled(GrFormTrash)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  & path {
    stroke: white;
  }
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const CashListSendButton = styled.button`
  display: flex;
  padding: 10px;
  transition: background 0.25s;

  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 768px) {
    font-size: 42px;
  }
`;
