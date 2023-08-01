import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import {
  CheckoutForm,
  CheckoutInput,
  CheckoutSubmit,
  CheckoutTitle,
  CheckoutUserAlert,
} from "./Checkout.styled";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useNavigate } from "react-router-dom";
import { authClearCashList } from "../../redux/auth.thunk";

export const CheckoutPage = () => {
  const user = useSelector(selectUser);
  const [userFullName, setFullName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPostAdress, setUserPostAdress] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const takeUser = async () => {
    const docSnap = await getDoc(doc(db, "users", `${user.email}`));

    if (docSnap.exists()) {
      const { name, userPostAdress, userNumber, email } = docSnap.data();
      setUserEmail(email);
      setFullName(name);
      setUserNumber(userNumber);
      setUserPostAdress(userPostAdress);
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => {
    if (user.email) {
      takeUser();
    }
  }, [user]);

  const sendToAdmin = async () => {
    try {
      await setDoc(doc(db, "orders", `${new Date()}`), {
        userFullName,
        userNumber,
        userEmail,
        userPostAdress,
        postDate: new Date(),
        id: `${userEmail}${new Date()}`,
        status: "create",
        cashList: user.cashList,
      });
      dispatch(authClearCashList());
      alert("Замовлення відправлене, з вами звяжуться");
      navigation("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CheckoutForm id="CheckoutForm">
      <CheckoutTitle>Контактні дані</CheckoutTitle>
      <CheckoutInput
        value={userFullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
        placeholder="Введіть ФІБ"
      />
      <CheckoutInput
        value={userNumber}
        onChange={(e) => {
          setUserNumber(e.target.value);
        }}
        placeholder="Введіть контактний номер телефону"
      />
      <CheckoutInput
        value={userEmail}
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
        placeholder="Введіть контактну електронну адресу"
      />
      <CheckoutInput
        value={userPostAdress}
        onChange={(e) => {
          setUserPostAdress(e.target.value);
        }}
        placeholder="Введіть адресу відділення пошти"
      />
      <CheckoutUserAlert>
        Попередження, відправка куплених товарів відбувається виключно мережею
        відділень "Нова пошта", оплатою при отриманні !!!
      </CheckoutUserAlert>
      <CheckoutSubmit onClick={sendToAdmin}>
        Завершити оформлення замовлення
      </CheckoutSubmit>
    </CheckoutForm>
  );
};
