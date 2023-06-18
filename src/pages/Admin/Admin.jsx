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
    "Кросівки",
    "Шорти",
    "Штани",
    "Сукні",
    "Куртки",
    "Комплекти",
    "Сумки",
  ];
  useEffect(() => {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const { image, name, price, category, size, otherInfo } = this.elements;
      const data = {
        id: nanoid(),
        image: image.value,
        name: name.value,
        price: price.value,
        category: category.value,
        size: size.value,
        otherInfo: otherInfo.value,
      };
      dispatch(addProductAsyncThunk(data));
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
        {categoryList.map((category, index) => (
          <AdminFormOption key={`${index}`} value={`${category}`}>
            {category}
          </AdminFormOption>
        ))}
      </AdminFormSelect>
      <AdminFormSelect id="sex" name="sex" placeholder="Вибрати рід">
        <AdminFormOption value="Чоловік">Чоловік</AdminFormOption>;
        <AdminFormOption value="Жінка">Жінка</AdminFormOption>;
      </AdminFormSelect>
      <AdminFormInput required name="size" placeholder="Додати розмір" />
      <AdminFormInput
        required
        name="producent"
        placeholder="Додати виробника"
      />
      <AdminFormTextArea
        name="otherInfo"
        placeholder="Додати додаткову інформацію"
      />
      <AdminFormSubmit>Залити новий товар</AdminFormSubmit>
    </AdminForm>
  );
};
