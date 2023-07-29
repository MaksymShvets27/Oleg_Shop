import { useLocation } from "react-router-dom";
import {
  NoGoods,
  SearchPageContainer,
  SearchPageInput,
  SearchPageSelect,
} from "./SearchPage.styled";
import {
  GoodsListItemInfoStyled,
  GoodsListItemName,
  GoodsListItemStyled,
  GoodsListStyled,
} from "../Main/Main.styed";
import { useEffect, useState } from "react";
import { CardModal } from "../../components/CardModal/CardModal";
import { AdminFormOption, AdminFormSelect } from "../Admin/Admin.styled";
import { categoryList } from "../../constants/SelectCategory/SelectCategory";
import { nanoid } from "nanoid";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";

export const SearchPage = () => {
  const location = useLocation();
  const state = location.state;

  const [goods, setGoods] = useState([]);

  const [filtredGoods, setFiltredGoods] = useState(goods);
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState();

  const [filter, setFilter] = useState("");
  const [categorySelect, setCategorySelect] = useState(
    state && state.category ? state.category : ""
  );

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
  }, [filter, categorySelect]);

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
          console.log(categorySelect);
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
          })
        ) : (
          <NoGoods>Товару не знайдено</NoGoods>
        )}
      </GoodsListStyled>
      {openModal && <CardModal card={card} closeModal={closeModal} />}
    </SearchPageContainer>
  );
};
