import styled from "styled-components";
import { AdminFormSelect } from "../Admin/Admin.styled";

export const SearchPageContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;
  padding: 10px 0;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 30px 0;
    gap: 30px;
  }
`;

export const SearchPageInput = styled.input`
  display: flex;
  background: inherit;
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px;
  color: black;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    width: 330px;
    font-size: 15px;
  }
`;

export const SearchPageSelect = styled(AdminFormSelect)`
  width: 180px;
  min-height: auto;
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px;
  color: black;

  @media (min-width: 768px) {
    width: 340px;
    font-size: 15px;
  }
`;

export const NoGoods = styled.p`
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
