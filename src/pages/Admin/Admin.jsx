import { useDispatch } from "react-redux";
import {
  AdminForm,
  AdminFormInput,
  AdminFormSelectCategory,
  AdminFormSubmit,
  AdminFormTextArea,
} from "./Admin.styled";
import { useEffect, useState } from "react";
import { addProductAsyncThunk } from "../../redux/goods.thunk";
import { nanoid } from "nanoid";

export const AdminPage = () => {
  const [name, setName] = useState("");
  const [imgRef, setImageRef] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const dispatch = useDispatch();

  const categoryList = ["Штани", "Кросівки", "Шорти", "Куртки", "Комплекти"];
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
      setName("");
      setImageRef("");
      setPrice("");
      setSize("");
      setOtherInfo("");
    });
  }, [dispatch]);

  return (
    <AdminForm id="form">
      <AdminFormInput
        required
        name="image"
        placeholder="Add product image url"
      />
      <AdminFormInput required name="name" placeholder="Add name" />
      <AdminFormInput required name="price" placeholder="Add price" />
      <AdminFormSelectCategory name="category" placeholder="Add category">
        {categoryList.map((category) => {
          console.log(category);
          return <option value={`${category}`}>{category}</option>;
        })}
      </AdminFormSelectCategory>
      <AdminFormInput required name="size" placeholder="Add size" />
      <AdminFormTextArea name="otherInfo" placeholder="Add other info" />
      <AdminFormSubmit>Post new product</AdminFormSubmit>
    </AdminForm>
  );
};
