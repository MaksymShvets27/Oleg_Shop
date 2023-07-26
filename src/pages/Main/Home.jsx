import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../../redux/selectors";
import { getGoodsList } from "../../redux/goods.thunk";
import {
  GoodsListItemInfoStyled,
  GoodsListItemName,
  GoodsListItemStyled,
  GoodsListStyled,
} from "./Main.styed";
import { CardModal } from "../../components/CardModal/CardModal";
import { nanoid } from "nanoid";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";

export const MainPage = () => {
  const [goods, setGoods] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState();

  const handleOpenModal = (item) => {
    setCard(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const getAllPost = async () => {
    onSnapshot(collection(db, "goods"), (data) => {
      setGoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
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
