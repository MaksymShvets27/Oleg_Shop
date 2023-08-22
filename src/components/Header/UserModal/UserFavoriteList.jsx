import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/selectors";
import { useEffect, useState } from "react";
import {
  FavoriteListItemInfoStyled,
  FavoriteListItemName,
  FavoriteListItemStyled,
  FavoriteListStyled,
} from "./UserFavoriteList.styled";
import { CardModal } from "../../CardModal/CardModal";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/config";

export const UserFavorileList = () => {
  const user = useSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState();

  const handleOpenModal = (item) => {
    setCard(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <FavoriteListStyled id="card">
        {user.favoriteList.length > 0 ? (
          user.favoriteList.map((item, index) => {
            return (
              <>
                <FavoriteListItemStyled
                  key={item.id}
                  onClick={() => handleOpenModal(item)}
                  style={{
                    backgroundImage: `url(${
                      typeof item.image === "string"
                        ? item.image
                        : item.image[0]
                    })`,
                  }}
                >
                  <FavoriteListItemInfoStyled>
                    <FavoriteListItemName>{item.name}</FavoriteListItemName>
                    <p>{item.price} грн.</p>
                  </FavoriteListItemInfoStyled>
                </FavoriteListItemStyled>
              </>
            );
          })
        ) : (
          <div>Список обранного пустий</div>
        )}
      </FavoriteListStyled>
      {openModal && <CardModal card={card} closeModal={closeModal} />}
    </>
  );
};
