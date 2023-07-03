import { useEffect } from "react";
import {
  CardModalBtn,
  CardModalImg,
  CardModalInfo,
  CardModalLeftDiv,
  CardModalMainDiv,
  CardModalOtherInfo,
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
              <>
                <p>
                  <span style={{ fontWeight: "bolder" }}>Ціна: </span>
                  {card.price} грн.
                </p>
              </>

              <>
                <p>
                  <span style={{ fontWeight: "bolder" }}>Категорія: </span>
                  {card.category}
                </p>
              </>
              {card.sex && (
                <>
                  <p>
                    <span style={{ fontWeight: "bolder" }}>Рід: </span>
                    {card.sex}
                  </p>
                </>
              )}
              {card.producent && (
                <>
                  <p>
                    <span style={{ fontWeight: "bolder" }}>Виробник: </span>
                    {card.producent}
                  </p>
                </>
              )}
              {card.size && (
                <>
                  <p>
                    <span style={{ fontWeight: "bolder" }}>Розмір: </span>
                    {card.size}
                  </p>
                </>
              )}
              <div>
                <span style={{ fontWeight: "bolder" }}>
                  Додаткова інформація:
                </span>
                <CardModalOtherInfo>{card.otherInfo}</CardModalOtherInfo>
              </div>
            </CardModalInfo>
          </CardModalMainDiv>
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
