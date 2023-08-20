import { useEffect, useState } from "react";
import {
  GoodsListItemInfoStyled,
  GoodsListItemIsNew,
  GoodsListItemName,
  GoodsListItemStyled,
  StyledGrStar,
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
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";

export const CategoryPage = () => {
  const [goods, setGoods] = useState([]);
  const user = useSelector(selectUser);
  const categoryPageList = [];
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState();

  let date = new Date().getTime() / 1000;

  const handleOpenModal = (item) => {
    setCard(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const getAllPost = async () => {
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
