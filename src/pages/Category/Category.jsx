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

  const [widthHTML, setWidthHTML] = useState("");

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

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      setWidthHTML(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidthHTML]);

  return (
    <>
      <CategoryGoodsList>
        {categoryPageList.map((category) => {
          let i = 0;
          return (
            <CategoryGoodsListItem>
              <CategoryGoodsListTitle>{category}</CategoryGoodsListTitle>
              <CategoryItemGoodsList>
                {goods.map((item, index) => {
                  if (item.category === category) {
                    i++;
                    if (
                      (window.innerWidth === 2160 && i > 8) ||
                      (window.innerWidth === 1152 && i > 6) ||
                      (window.innerWidth === 480 && i > 4)
                    ) {
                      return;
                    }
                    return (
                      <GoodsListItemStyled
                        key={index}
                        onClick={() => handleOpenModal(item)}
                        style={{
                          backgroundImage: `url(${
                            typeof item.image === "string"
                              ? item.image
                              : item.image[0]
                          })`,
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
