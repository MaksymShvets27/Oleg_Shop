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
import { addProductAsyncThunk } from "../../redux/goods.thunk";
import { nanoid } from "nanoid";

export const AdminPage = () => {
  const dispatch = useDispatch();

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
        id: nanoid(),
        image: image.value,
        name: name.value,
        price: price.value,
        sex: sex.value || false,
        producent: producent.value || false,
        category: category.value,
        size: size.value || false,
        otherInfo: otherInfo.value || false,
      };
      dispatch(addProductAsyncThunk(data));
      this.reset();
    });
  }, [dispatch]);

  return (
    <AdminForm id="form">
      <AdminFormInput
        required
        name="image"
        placeholder="Додати ссилку на картинку"
      />
      <AdminFormInput required name="name" placeholder="Додати назву" />
      <AdminFormInput required name="price" placeholder="Додати ціну" />
      <AdminFormSelect id="category" name="category">
        {categoryList.map((category, index) =>
          category.category ? (
            <optgroup label={`${category.name}`} key={nanoid()}>
              {category.category &&
                category.category.map((category) => {
                  return (
                    <AdminFormOption key={nanoid()} value={`${category}`}>
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
            >
              {category.name}
            </AdminFormOption>
          )
        )}
      </AdminFormSelect>
      <AdminFormSelect id="sex" name="sex" placeholder="Вибрати рід">
        <AdminFormOption>Без роду</AdminFormOption>
        <AdminFormOption value="Чоловік">Чоловік</AdminFormOption>
        <AdminFormOption value="Жінка">Жінка</AdminFormOption>
      </AdminFormSelect>
      <AdminFormInput name="size" placeholder="Додати розмір" />
      <AdminFormInput name="producent" placeholder="Додати виробника" />
      <AdminFormTextArea
        name="otherInfo"
        placeholder="Додати додаткову інформацію"
      />
      <AdminFormSubmit>Залити новий товар</AdminFormSubmit>
    </AdminForm>
  );
};
