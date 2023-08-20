import styled from "styled-components";

export const ImgModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ImgModalImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const ImgModal = styled.div`
  max-width: calc(100vw - 120px);
  max-height: calc(100vh - 50px);
  @media (min-width: 1440px) {
    max-width: calc(100vw - 50px);
    max-height: calc(100vh - 24px);
  }
`;
