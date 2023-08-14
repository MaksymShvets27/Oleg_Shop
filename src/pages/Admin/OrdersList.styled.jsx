import {
  GrCheckmark,
  GrFormCheckmark,
  GrFormTrash,
  GrMailOption,
} from "react-icons/gr";
import styled from "styled-components";

export const OrderListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  position: reletive;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`;

export const OrderListItem = styled.li`
  width: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 6px;
  font-weight: bolder;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 8px;
    border-radius: 20px;
    padding: 20px;
  }
`;

export const OrderCardImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid black;

  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`;

export const OrderOperationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`;
export const StyledGrOrderDelete = styled(GrFormTrash)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  & path {
    stroke: black;
  }
  &:hover path {
    stroke: green !important;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledGrOrderCheck = styled(GrFormCheckmark)`
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover polyline {
    stroke: green !important;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledGrOrderSend = styled(GrMailOption)`
    width: 15px;
    height: 15px;
  cursor: pointer;
  & path {
    stroke: black;
  }
    &:hover path{
      stroke: green !important;
    }
  }
   @media (min-width: 768px) {
  width: 20px;
  height: 20px;
  }
`;
