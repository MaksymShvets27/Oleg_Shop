import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../../redux/selectors";
import { getGoodsList } from "../../redux/goods.thunk";
import {
  GoodsListItemInfoStyled,
  GoodsListItemName,
  GoodsListItemStyled,
} from "../Main/Main.styed";
import {
  CategoryGoodsList,
  CategoryGoodsListItem,
  CategoryGoodsListTitle,
  CategoryItemButtonMore,
  CategoryItemGoodsList,
} from "./Category.styled";
import { CardModal } from "../../components/CardModal/CardModal";
import { useNavigate } from "react-router-dom";

export const CategoryPage = () => {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();
  const categoryPageList = [];
  const navigate = useNavigate();

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

  goods.map((good) => {
    if (!categoryPageList.includes(good.category)) {
      categoryPageList.push(good.category);
    }
  });
  categoryPageList.sort();

  return (
    <>
      <CategoryGoodsList>
        {categoryPageList.map((category) => {
          return (
            <CategoryGoodsListItem>
              <CategoryGoodsListTitle>{category}</CategoryGoodsListTitle>
              <CategoryItemGoodsList>
                {goods.map((item, index) => {
                  if (item.category === category) {
                    return (
                      <GoodsListItemStyled
                        key={index}
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
                    );
                  }
                })}
              </CategoryItemGoodsList>
              <CategoryItemButtonMore
                onClick={() =>
                  navigate("/search", {
                    state: { category },
                  })
                }
              >
                Побачити більше
              </CategoryItemButtonMore>
            </CategoryGoodsListItem>
          );
        })}
      </CategoryGoodsList>
      {openModal && <CardModal card={card} closeModal={closeModal} />}
    </>
  );
};
