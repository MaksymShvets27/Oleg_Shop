import { useLocation } from "react-router-dom";
import {
  NoGoods,
  SearchPageContainer,
  SearchPageInput,
  SearchPageSelect,
} from "./SearchPage.styled";
import {
  GoodsListItemInfoStyled,
  GoodsListItemIsNew,
  GoodsListItemName,
  GoodsListItemStyled,
  GoodsListStyled,
  StyledGrStar,
} from "../Main/Main.styed";
import { useEffect, useState } from "react";
import { CardModal } from "../../components/CardModal/CardModal";
import { AdminFormOption, AdminFormSelect } from "../Admin/Admin.styled";
import { categoryList } from "../../constants/SelectCategory/SelectCategory";
import { nanoid } from "nanoid";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";

export const SearchPage = () => {
  const location = useLocation();
  const state = location.state;
  const user = useSelector(selectUser);
  const [goods, setGoods] = useState([]);

  const [filtredGoods, setFiltredGoods] = useState(goods);
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState();

  const [filter, setFilter] = useState("");
  const [categorySelect, setCategorySelect] = useState(
    state && state.category ? state.category : ""
  );

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

  useEffect(() => {
    if (filter.length > 0) {
      let newGoodsArray = goods.filter(
        (item) =>
          item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) &&
          item.category
            .toLocaleLowerCase()
            .includes(categorySelect.toLocaleLowerCase())
      );
      setFiltredGoods(newGoodsArray);
    } else {
      let newGoodsArray = goods.filter((item) =>
        item.category
          .toLocaleLowerCase()
          .includes(categorySelect.toLocaleLowerCase())
      );
      setFiltredGoods(newGoodsArray);
    }
  }, [filter, categorySelect, goods]);

  return (
    <SearchPageContainer>
      <SearchPageInput
        placeholder="Назва товару"
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
      <SearchPageSelect
        id="category"
        name="category"
        value={categorySelect}
        onChange={(event) => {
          setCategorySelect(event.target.value);
        }}
      >
        <AdminFormOption
          key={nanoid()}
          value={``}
          selected={(!(state && state.category) && "selected") || null}
        >
          Без категорії
        </AdminFormOption>
        {categoryList.map((category, index) =>
          category.category ? (
            <optgroup label={`${category.name}`} key={nanoid()}>
              {category.category &&
                category.category.map((category) => {
                  return (
                    <AdminFormOption
                      key={nanoid()}
                      value={`${category}`}
                      selected={
                        (categorySelect === category && "selected") || null
                      }
                    >
                      {category}
                    </AdminFormOption>
                  );
                })}
            </optgroup>
          ) : (
            <AdminFormOption
              key={nanoid()}
              value={`${category.name}`}
              style={{ fontWeight: "bolder" }}
              selected={
                (categorySelect === category.name && "selected") || null
              }
            >
              {category.name}
            </AdminFormOption>
          )
        )}
      </SearchPageSelect>
      <GoodsListStyled>
        {filtredGoods.length > 0 ? (
          filtredGoods.map((item, index) => {
            return (
              <>
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
              </>
            );
          })
        ) : (
          <NoGoods>
            <p>Нічого не знайдено</p>
            <p> (використайте фільтр пошуку)</p>
          </NoGoods>
        )}
      </GoodsListStyled>
      {openModal && <CardModal card={card} closeModal={closeModal} />}
    </SearchPageContainer>
  );
};
