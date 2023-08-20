import { useEffect, useState } from "react";
import {
  GoodsListItemInfoStyled,
  GoodsListItemIsNew,
  GoodsListItemName,
  GoodsListItemStyled,
  GoodsListStyled,
  StyledGrStar,
} from "./Main.styed";
import { CardModal } from "../../components/CardModal/CardModal";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { nanoid } from "nanoid";
import localStorage from "redux-persist/es/storage";
import { authSetFavoriteList, authSignInUser } from "../../redux/auth.thunk";

export const MainPage = () => {
  const [goods, setGoods] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState();
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  let date = new Date().getTime() / 1000;

  useEffect(() => {
    if (
      localStorage.getItem("userEmail") &&
      localStorage.getItem("userPassword")
    ) {
      LogIn();
    }
  }, []);

  const LogIn = async () => {
    const email = await localStorage.getItem("userEmail");
    const password = await localStorage.getItem("userPassword");
    dispatch(
      authSignInUser({
        email,
        password,
      })
    );
    dispatch(authSetFavoriteList(email));
  };

  const handleOpenModal = (item) => {
    setCard(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const getAllPost = () => {
    onSnapshot(collection(db, "goods"), (data) => {
      setGoods(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) =>
            a.createTime.seconds > b.createTime.seconds ? -1 : 1
          )
      );
    });
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <>
      <GoodsListStyled id="cardList">
        {goods.length > 0 &&
          goods.map((item, index) => {
            return (
              <>
                <GoodsListItemStyled
                  key={item.id}
                  onClick={() => handleOpenModal(item)}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  {user.favoriteList &&
                    user.favoriteList.map((good) => {
                      if (good.name === item.name) {
                        return <StyledGrStar />;
                      }
                    })}
                  {date - item.createTime.seconds < 259200 && (
                    <GoodsListItemIsNew>Новинка!</GoodsListItemIsNew>
                  )}
                  <GoodsListItemInfoStyled>
                    <GoodsListItemName>{item.name}</GoodsListItemName>
                    <p>{item.price} грн.</p>
                  </GoodsListItemInfoStyled>
                </GoodsListItemStyled>
              </>
            );
          })}
      </GoodsListStyled>
      {openModal && <CardModal card={card} closeModal={closeModal} />}
    </>
  );
};
