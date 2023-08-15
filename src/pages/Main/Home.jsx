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
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";

export const MainPage = () => {
  const [goods, setGoods] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState();
  const user = useSelector(selectUser);

  let date = new Date().getTime() / 1000;

  const handleOpenModal = (item) => {
    setCard(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const getAllPost = () => {
    onSnapshot(collection(db, "goods"), (data) => {
      setGoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    setGoods(goods?.sort((a, b) => (a.createTime > b.createTime ? -1 : 1)));
  };

  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <>
      <GoodsListStyled id="card">
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
                  {user.favoriteList.map((good) => {
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
