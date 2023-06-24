import { useEffect } from "react";
import {
  CardModalBtn,
  CardModalImg,
  CardModalInfo,
  CardModalLeftDiv,
  CardModalMainDiv,
  CardModalStyled,
  CardModalTitle,
  ModalOverlay,
  ModalWrapper,
  StyledGrFormClose,
  StyledGrFormDelete,
  StyledGrFormEdit,
} from "./CardModal.styled";
import { useDispatch } from "react-redux";
import { deleteProductAsyncThunk } from "../../redux/goods.thunk";
import { useNavigate } from "react-router-dom";

export const CardModal = ({ card, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              />
              <CardModalBtn>Добавити до покупок</CardModalBtn>
              <CardModalBtn>Добавити до обранного</CardModalBtn>
            </CardModalLeftDiv>
            <CardModalInfo>
              <CardModalTitle>{card.name}</CardModalTitle>
              <h4>Ціна:</h4>
              <p>{card.price}грн.</p>
              <h4>Категорія:</h4>
              <p>{card.category}</p>
              {card.sex && (
                <>
                  <h4>Рід:</h4>
                  <p>{card.sex}</p>
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
          <StyledGrFormClose onClick={() => closeModal()} />
          <StyledGrFormDelete
            onClick={() => {
              dispatch(deleteProductAsyncThunk(card.id));
              closeModal();
            }}
          />
          <StyledGrFormEdit
            onClick={() => {
              navigate("/admin", { state: card });
            }}
          />
        </CardModalStyled>
      </ModalWrapper>
    </ModalOverlay>
  );
};
