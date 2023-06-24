import { useDispatch } from "react-redux";
import {
  AdminForm,
  AdminFormInput,
  AdminFormOption,
  AdminFormSelect,
  AdminFormSubmit,
  AdminFormTextArea,
} from "./Admin.styled";
import { useEffect, useState } from "react";
import {
  addProductAsyncThunk,
  changeProductAsyncThunk,
} from "../../redux/goods.thunk";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";

export const AdminPage = () => {
  const location = useLocation();
  console.log(location.state);
  const state = location.state;
  const dispatch = useDispatch();

  const id = state ? state.id : "";
  const [image, setImg] = useState(state ? state.image : "");
  const [name, setName] = useState(state ? state.name : "");
  const [price, setPrice] = useState(state ? state.price : "");
  const [producent, setProducent] = useState(state ? state.producent : "");
  const [size, setSize] = useState(state ? state.size : "");
  const [otherInfo, setOtherInfo] = useState(state ? state.otherInfo : "");

  const categoryList = [
    {
      name: "Одяг",
      category: [
        "Сукні",
        "Сарафани",
        "Спідниці",
        "Нічний та домашній одяг",
        "Термобілизна",
        "Гірськолижний одяг",
        "Шкарпетки",
        "Панчохи",
        "Колготки",
        "Комбінезони та напівкомбінезони",
        "Кофти",
        "Светри",
        "Кардигани",
        "Костюми",
        "Жакети",
        "Спортивний одяг",
        "Футболки",
        "Майки",
        "Шорти",
        "Бриджі",
        "Капрі",
        "Джинси",
        "Брюки",
        "Легінси",
        "Верхній одяг",
        "Блузи",
        "Сорочки",
        "Для вагітних",
        "Купальники",
        "Пляжний одяг",
        "Капрі",
        "Штани",
        "Піджаки",
        "Гетри",
        "Сліди",
        "Спідня білизна",
        "Пляжні шорти та плавки",
      ],
    },
    {
      name: "Взуття",
      category: [
        "Кросівки",
        "Кеди",
        "Снікери",
        "Босоніжки",
        "Сандалі",
        "Туфлі",
        "Балетки",
        "Сліпони",
        "Еспадрильї",
        "Сабо",
        `В'єтнамки`,
        "Шльопанці",
        "Чоботи",
        "Черевики",
        "Уги",
        "Ботильйони",
        "Мокасини",
        "Топсайдери",
        "Лофери",
        "Сандалі",
      ],
    },
    {
      name: "Сумки та аксесуари",
      category: [
        "Сумки",
        "Рюкзаки",
        "Валізи",
        "Аксесуари для волосся",
        "Годинники",
        "Рукавички та рукавиці",
        "Біжутерія",
        "Головні убори",
        "Ремені та пояси",
        "Гаманці",
        "Портмоне",
        "Ремені",
        "Пояси",
        "Хустки",
        "Шарфи",
        "Краватки",
        "Підтяжки",
        "Прикраси",
        "Парасолі",
        "Сонцезахисні окуляри",
        "Дорожні сумки",
      ],
    },
    {
      name: "Товари для дому",
      category: [
        "Пледи",
        "Засоби для збирання",
        "Господарські товари",
        "Термоси та пляшки",
        "Чашки",
        "Кухлі",
        "Рушники",
        "Домашній текстиль",
        "Аромати для дому",
      ],
    },
    { name: `Іграшки для дітей` },
    { name: "Інструменти/обладнання" },
    { name: "Зоотовари" },
    { name: "Ювелірні вироби" },
    {
      name: "Велосипеди та аксесуари",
      category: [
        "Велоаксесуари",
        `Велокомп'ютери`,
        "Велошоломи",
        "Велосумки",
        "Велоодяг",
        "Велоперчатки",
        "Фляги та флягоутримувачі",
      ],
    },
    { name: "Аксесуари для телефонів" },
    {
      name: "Спорт та захоплення",
      category: [
        "Трекінгові палиці",
        "Гірськолижні маски",
        "Гірськолижні шоломи",
        "Гірськолижні рукавички",
        "Лижні палиці",
        "Активний відпочинок",
        "Bуризм та хобі",
        "Газові та мультипаливні туристичні системи",
        "Складні меблі",
        "Посуд для відпочинку та туризму",
        "Спальні мішки",
        "Намети та аксесуари",
        "Черевики для сноубордів",
        "Кріплення для сноуборду",
        "Черевики для лиж",
        "Туристичні килимки",
        "Зимові види спорту",
      ],
    },
    { name: `Краса та здоров'я` },
    { name: "Електронні сигарети" },
    { name: "Кальяни та аксесуари" },
    { name: "Товари для бізнесу" },
  ];

  useEffect(() => {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const { image, name, price, sex, producent, category, size, otherInfo } =
        this.elements;
      const data = {
        id: id,
        image: image.value,
        name: name.value,
        price: price.value,
        sex: sex.value || "",
        producent: producent.value || "",
        category: category.value,
        size: size.value || "",
        otherInfo: otherInfo.value || "",
      };
      if (state) {
        dispatch(changeProductAsyncThunk(data));
      } else {
        dispatch(addProductAsyncThunk(data));
      }
      this.reset();
    });
  }, [dispatch]);

  return (
    <AdminForm id="form">
      <p>Малюнок</p>
      <AdminFormInput
        required
        name="image"
        placeholder="Додати ссилку на картинку"
        value={image}
        onChange={(event) => setImg(event.target.value)}
      />
      <p>Назва</p>
      <AdminFormInput
        required
        name="name"
        placeholder="Додати назву"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Ціна в гривнях</p>
      <AdminFormInput
        required
        name="price"
        placeholder="Додати ціну"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <p>Категорія</p>
      <AdminFormSelect id="category" name="category">
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
                        (state && state.category === category && "selected") ||
                        null
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
                (state && state.category === category.name && "selected") ||
                null
              }
            >
              {category.name}
            </AdminFormOption>
          )
        )}
      </AdminFormSelect>
      <p>Рід</p>
      <AdminFormSelect id="sex" name="sex" placeholder="Вибрати рід">
        <AdminFormOption
          value="Чоловік"
          selected={(state && state.sex === "Чоловік" && "selected") || null}
        >
          Чоловік
        </AdminFormOption>
        <AdminFormOption
          value="Жінка"
          selected={(state && state.sex === "Жінка" && "selected") || null}
        >
          Жінка
        </AdminFormOption>
      </AdminFormSelect>
      <p>Розмір</p>
      <AdminFormInput
        name="size"
        placeholder="Додати розмір"
        value={size}
        onChange={(event) => setSize(event.target.value)}
      />
      <p>Виробник</p>
      <AdminFormInput
        name="producent"
        placeholder="Додати виробника"
        value={producent}
        onChange={(event) => setProducent(event.target.value)}
      />
      <p>Додаткова інформація</p>
      <AdminFormTextArea
        name="otherInfo"
        placeholder="Додати додаткову інформацію"
        value={otherInfo}
        onChange={(event) => setOtherInfo(event.target.value)}
      />
      <AdminFormSubmit>
        {state ? "Зілити зміни" : "Залити новий товар"}
      </AdminFormSubmit>
    </AdminForm>
  );
};
