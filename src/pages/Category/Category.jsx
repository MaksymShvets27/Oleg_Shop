import { useEffect, useState } from "react";
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
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";

export const CategoryPage = () => {
  const [goods, setGoods] = useState([]);

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

  const getAllPost = async () => {
    onSnapshot(collection(db, "goods"), (data) => {
      setGoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    getAllPost();
  }, []);

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
