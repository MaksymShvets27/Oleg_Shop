import { useEffect, useState } from "react";
import {
  CardModalBtn,
  CardModalImg,
  CardModalImgNextIcon,
  CardModalImgPreviousIcon,
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
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/config";
import { selectUser } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { cashListAddGood } from "../../redux/cashList.thunk";
import {
  authAddToFavoriteList,
  authDeleteFavoriteList,
} from "../../redux/auth.thunk";
import ImageModal from "../ImgModal/ImgModal";

export const CardModal = ({ card, closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openImgModal, setOpenImgModal] = useState(false);
  const user = useSelector(selectUser);
  const [currentImg, setCurrentImg] = useState(0);
  let favoriteList = user.favoriteList;
  let arrayName =
    favoriteList.length > 0 ? user.favoriteList.map((item) => item.name) : [];
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
      await updateDoc(doc(db, "users", `${user.email}`), {
        favoriteList: [...favoriteList, card],
      });
    } catch (e) {
      console.log(e);
    }
  };

  const addToFavoriteList = () => {
    dispatch(authAddToFavoriteList(card));
    sendToFavoriteList();
  };

  const queryDeleteFromFavorite = async () => {
    try {
      const newFavoriteList = favoriteList.filter((item) => {
        if (item.name !== card.name) return item;
      });
      await updateDoc(doc(db, "users", `${user.email}`), {
        favoriteList: newFavoriteList,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteFromFavoriteList = () => {
    queryDeleteFromFavorite();
    dispatch(authDeleteFavoriteList(card));
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnESCLogoModal);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnESCLogoModal);
    };
  }, []);

  const nextImage = () => {
    setCurrentImg((prevState) => prevState + 1);
  };

  const previousImage = () => {
    setCurrentImg((prevState) => prevState - 1);
  };
  const onCloseImgModal = () => {
    setOpenImgModal(false);
  };

  return (
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <CardModalStyled>
          <CardModalMainDiv>
            <CardModalLeftDiv>
              {currentImg !== 0 && typeof card.image !== "string" && (
                <CardModalImgPreviousIcon onClick={previousImage} />
              )}
              <CardModalImg
                style={{
                  backgroundImage: `url(${
                    typeof card.image === "string"
                      ? card.image
                      : card.image[currentImg]
                  })`,
                }}
                onClick={() => {
                  setOpenImgModal(true);
                }}
              ></CardModalImg>
              {currentImg !== card.image.length - 1 &&
                typeof card.image !== "string" && (
                  <CardModalImgNextIcon onClick={nextImage} />
                )}
              <CardModalBtn onClick={addToCashList}>
                Добавити до покупок
              </CardModalBtn>
              {user.isLogIn &&
                (arrayName.includes(card.name) ? (
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
        {openImgModal && (
          <ImageModal
            onCloseModal={onCloseImgModal}
            currentImageIndex={currentImg}
            currentImageUrl={card.image}
            nextImage={nextImage}
            previousImage={previousImage}
          />
        )}
      </ModalWrapper>
    </ModalOverlay>
  );
};
