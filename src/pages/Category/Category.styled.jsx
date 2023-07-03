import styled from "styled-components";
import { GoodsListStyled } from "../Main/Main.styed";
import { AdminFormSubmit } from "../Admin/Admin.styled";

export const CategoryGoodsList = styled(GoodsListStyled)`
  flex-direction: column;
`;

export const CategoryGoodsListTitle = styled.h4`
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`;

export const CategoryGoodsListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 30px;
    gap: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
    gap: 50px;
  }
`;

export const CategoryItemGoodsList = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  position: reletive;
`;

export const CategoryItemButtonMore = styled(AdminFormSubmit)`
  font-size: 10px;
  display: flex;
  justify-content: center;
  width: 100px;
  padding: 5px;

  @media (min-width: 768px) {
    width: 240px;
    font-size: 24px;
    padding: 10px;
  }

  @media (min-width: 1440px) {
    width: 400px;
    font-size: 32px;
    padding: 15px;
  }
`;
