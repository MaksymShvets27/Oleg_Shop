import styled from "styled-components";

export const GoodsListStyled = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;
  padding: 30px 0;

  @media (min-width: 768px) {
    padding: 50px 0;
    gap: 30px;
  }
`;

export const GoodsListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  font-size: 4px;

  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;
  font-weight: bolder;

  background-position: 50% 50%;
  background-size: cover;
  @media (min-width: 768px) {
    font-size: 10px;
    width: 250px;
    height: 250px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 15px;
    width: 400px;
    height: 400px;
  }
`;

export const GoodsListItemInfoStyled = styled.div`
  background: #ffffff9c;
  height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const GoodsListItemName = styled.p`
  width: 90%;
`;
