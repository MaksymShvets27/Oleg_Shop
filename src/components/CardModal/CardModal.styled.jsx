import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 10%;

  position: fixed;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const CardModalStyled = styled.div`
  z-index: 100;
  display: flex;
  position: relative;
  border-radius: 30px;
  width: 800px;
  min-height: 600px;
  background: #f9f9f9;
  padding: 24px 24px;
  font-size: 22px;

  flex-direction: column;
`;

export const CardModalImg = styled.img`
  border-radius: 20px;
`;

export const CardModalInfo = styled.div`
  padding: 50px;
  cursor: default;
  width: 75%;
`;

export const CardModalBtn = styled.button`
  width: 100%;
  &.active {
    background: green;
  }

  &:hover {
    background: green;
  }
`;

export const CardModalLeftDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const CardModalMainDiv = styled.div`
  display: flex;
`;
