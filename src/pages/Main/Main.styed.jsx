import styled from "styled-components";

export const GoodsListStyled = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  padding: 50px;
`;

export const GoodsListItemStyled = styled.li`
  width: 300px;
  height: 300px;

  position: relative;
  overflow: hidden;
  border-radius: 20px;
  border: 2px solid #1a1a1a;
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
