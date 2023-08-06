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
  CardRemoveModalBtn,
  ModalOverlay,
  ModalWrapper,
  StyledGrFormClose,
  StyledGrFormDelete,
  StyledGrFormEdit,
} from "./CardModal.styled";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { selectUser } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { cashListAddGood } from "../../redux/cashList.thunk";
import {
  authAddToFavoriteList,
  authDeleteFavoriteList,
} from "../../redux/auth.thunk";

export const CardModal = ({ card, closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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

  const deleteGood = async () => {
    await deleteDoc(doc(db, "goods", `${card.id}`));
    closeModal();
  };

  const addToCashList = () => {
    dispatch(cashListAddGood(card));
  };

  const sendToFavoriteList = async () => {
    try {
      await addDoc(
        collection(db, "users", `${user.email}`, `favoriteList`),
        card
      );
      alert("Товар добавлено до обраного");
    } catch (e) {
      console.log(e);
    }
  };

  const addToFavoriteList = () => {
    dispatch(authAddToFavoriteList(card));
    sendToFavoriteList();
  };

  const deleteFromFavoriteList = () => {
    dispatch(authDeleteFavoriteList(card));
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
              <CardModalBtn onClick={addToCashList}>
                Добавити до покупок
              </CardModalBtn>
              {user.isLogIn &&
                (user.favoriteList.includes(card) ? (
                  <CardRemoveModalBtn onClick={deleteFromFavoriteList}>
                    Видалити з обранного
                  </CardRemoveModalBtn>
                ) : (
                  <CardModalBtn onClick={addToFavoriteList}>
                    Добавити до обранного
                  </CardModalBtn>
                ))}
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
          {user.role === "admin" && (
            <>
              <StyledGrFormDelete
                onClick={() => {
                  deleteGood();
                }}
              />
              <StyledGrFormEdit
                onClick={() => {
                  navigate("/admin", { state: card });
                }}
              />
            </>
          )}
        </CardModalStyled>
      </ModalWrapper>
    </ModalOverlay>
  );
};
