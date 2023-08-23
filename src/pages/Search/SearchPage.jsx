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
  MoreButton,
  StyledGrStar,
} from "../Main/Main.styed";
import { useEffect, useState } from "react";
import { CardModal } from "../../components/CardModal/CardModal";
import { AdminFormOption, AdminFormSelect } from "../Admin/Admin.styled";
import { categoryList } from "../../constants/SelectCategory/SelectCategory";
import { nanoid } from "nanoid";
import {
  collection,
  endAt,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  startAt,
  where,
} from "firebase/firestore";
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
  const [lastElements, setLastElements] = useState("");
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

  const getAllPost = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getNewPosts = async () => {
    const next = query(
      collection(db, "goods"),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getGoodsByCategory = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getMoreGoodsByCategory = async () => {
    const next = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      setFiltredGoods((prevstate) => [
        ...prevstate,
        { ...doc.data(), id: doc.id },
      ]);
    });
  };

  const getGoodsByFilter = async () => {
    setFiltredGoods([]);
    const first = query(collection(db, "goods"), orderBy("name"), limit(25));
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        setFiltredGoods((prevstate) => [
          ...prevstate,
          { ...doc.data(), id: doc.id },
        ]);
      }
    });
  };

  const getMoreGoodsByFilter = async () => {
    const next = query(
      collection(db, "goods"),
      orderBy("name"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        setFiltredGoods((prevstate) => [
          ...prevstate,
          { ...doc.data(), id: doc.id },
        ]);
      }
    });
  };

  const getGoodsByFilterAndCategory = async () => {
    setFiltredGoods([]);
    const first = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      limit(24)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);
    let array = [];
    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        array.push({ ...doc.data(), id: doc.id });
      }
    });
    setFiltredGoods(array);
  };

  const getMoreGoodsByFilterAndCategory = async () => {
    const next = query(
      collection(db, "goods"),
      where("category", "==", categorySelect),
      orderBy("createTime", "desc"),
      startAfter(lastElements),
      limit(24)
    );
    const documentSnapshots = await getDocs(next);
    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastElements(lastVisible);

    documentSnapshots.docs.map((doc) => {
      if (doc.data().name.toLowerCase().includes(filter.toLowerCase())) {
        setFiltredGoods((prevstate) => [
          ...prevstate,
          { ...doc.data(), id: doc.id },
        ]);
      }
    });
  };

  useEffect(() => {
    if (!(filter.length > 0) && !categorySelect) {
      getAllPost();
    } else if (!(filter.length > 0) && categorySelect) {
      getGoodsByCategory();
    } else if (filter.length > 0 && !categorySelect) {
      getGoodsByFilter();
    } else {
      getGoodsByFilterAndCategory();
    }
  }, [filter, categorySelect]);

  const getMore = () => {
    if (!(filter.length > 0) && !categorySelect) {
      getNewPosts();
    } else if (!(filter.length > 0) && categorySelect) {
      getMoreGoodsByCategory();
    } else if (filter.length > 0 && !categorySelect) {
      getMoreGoodsByFilter();
    } else {
      getMoreGoodsByFilterAndCategory();
    }
  };

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
      <MoreButton onClick={getMore}>Побачити більше</MoreButton>
      {openModal && <CardModal card={card} closeModal={closeModal} />}
    </SearchPageContainer>
  );
};
