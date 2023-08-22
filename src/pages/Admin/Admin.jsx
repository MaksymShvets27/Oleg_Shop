import { useDispatch, useSelector } from "react-redux";
import {
  AdminForm,
  AdminFormInput,
  AdminFormOption,
  AdminFormSelect,
  AdminFormSubmit,
  AdminFormTextArea,
} from "./Admin.styled";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { categoryList } from "../../constants/SelectCategory/SelectCategory";
import { nanoid } from "nanoid";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { selectUser } from "../../redux/selectors";
import { OrderListStyled } from "./OrdersList.styled";
import { OrdersList } from "./OrdersList";

export const AdminPage = () => {
  const { role } = useSelector(selectUser);
  const navigation = useNavigate();

  const location = useLocation();
  const state = location.state;
  const dispatch = useDispatch();

  const [image, setImg] = useState(state ? state.image : "");
  const [name, setName] = useState(state ? state.name : "");
  const [price, setPrice] = useState(state ? state.price : "");
  const [producent, setProducent] = useState(state ? state.producent : "");
  const [size, setSize] = useState(state ? state.size : "");
  const [otherInfo, setOtherInfo] = useState(state ? state.otherInfo : "");

  const addGood = async (data) => {
    try {
      if (state) {
        await setDoc(doc(db, "goods", `${data.id}`), data);
        alert("Change success");
      } else {
        await addDoc(collection(db, "goods"), data);
        alert("Add success");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const { image, name, price, sex, producent, category, size, otherInfo } =
        this.elements;
      const imgArray = image.value.split(" ").filter((img) => {
        if (img) {
          return img;
        }
      });
      const data = {
        image: imgArray,
        name: name.value,
        price: price.value,
        sex: sex.value || "",
        producent: producent.value || "",
        category: category.value,
        size: size.value || "",
        otherInfo: otherInfo.value || "",
        createTime: new Date(),
      };
      addGood(data);
      this.reset();
    });
  }, [dispatch]);

  useEffect(() => {
    if (role != "admin") {
      navigation("/");
    }
  });
  return (
    <>
      <AdminForm id="form">
        <p>Малюнок</p>
        <AdminFormTextArea
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
          <AdminFormOption value="">Вкажіть категорію</AdminFormOption>
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
                          (state &&
                            state.category === category &&
                            "selected") ||
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
          <AdminFormOption value="">Без роду</AdminFormOption>
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
      <h3>Замовлення</h3>
      <OrdersList />
    </>
  );
};
