import { useEffect } from "react";
import {
  CardModalBtn,
  CardModalImg,
  CardModalInfo,
  CardModalLeftDiv,
  CardModalMainDiv,
  CardModalStyled,
  ModalOverlay,
  ModalWrapper,
} from "./CardModal.styled";

export const CardModal = ({ card, closeModal }) => {
  const onClickBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const closeOnESCLogoModal = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnESCLogoModal);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnESCLogoModal);
    };
  }, []);

  return (
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <CardModalStyled>
          <CardModalMainDiv>
            <CardModalLeftDiv>
              <CardModalImg
                src={`${card.image}`}
                width="300px"
                height="300px"
                alt={`${card.name}`}
              />
              <CardModalBtn>Добавити до покупок</CardModalBtn>
              <CardModalBtn>Добавити до обранного</CardModalBtn>
            </CardModalLeftDiv>
            <CardModalInfo>
              <h3>{card.name}</h3>
              <h4>Ціна:</h4>
              <p>{card.price}грн.</p>
              <h4>Категорія:</h4>
              <p>{card.category}</p>
              {card.sex && !card.sex === "Без роду" && (
                <>
                  <h4>Рід:</h4>
                  <p>{card.sex}грн.</p>
                </>
              )}
              {card.producent && (
                <>
                  <h4>Виробник:</h4>
                  <p>{card.producent}</p>
                </>
              )}
              {card.size && (
                <>
                  <h4>Розмір:</h4>
                  <p>{card.size}</p>
                </>
              )}
            </CardModalInfo>
          </CardModalMainDiv>
          <h4>Додаткова інформація:</h4>
          <p>{card.otherInfo}</p>
        </CardModalStyled>
      </ModalWrapper>
    </ModalOverlay>
  );
};
