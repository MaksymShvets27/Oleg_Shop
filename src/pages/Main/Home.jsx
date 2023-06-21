import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../../redux/selectors";
import { getGoodsList } from "../../redux/goods.thunk";
import {
  GoodsListItemInfoStyled,
  GoodsListItemStyled,
  GoodsListStyled,
} from "./Main.styed";
import { CardModal } from "../../components/CardModal/CardModal";

export const MainPage = () => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState();

  const handleOpenModal = (item) => {
    setCard(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    dispatch(getGoodsList());
  }, [dispatch]);
  return (
    <>
      <GoodsListStyled id="card" key="cardslist">
        {goods.length > 0 &&
          goods.map((item, index) => {
            return (
              <>
                <GoodsListItemStyled
                  key={index}
                  onClick={() => handleOpenModal(item)}
                >
                  <img
                    src={`${item.image}`}
                    width="300px"
                    height="300px"
                    alt={`${item.name}`}
                  />
                  <GoodsListItemInfoStyled>
                    <p>{item.name}</p>
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
