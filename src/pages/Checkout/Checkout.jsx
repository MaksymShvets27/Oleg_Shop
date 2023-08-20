import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import {
  CheckoutForm,
  CheckoutInput,
  CheckoutMessengeForUser,
  CheckoutSubmit,
  CheckoutTitle,
  CheckoutUserAlert,
} from "./Checkout.styled";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useNavigate } from "react-router-dom";
import { authClearCashList } from "../../redux/auth.thunk";
import { HistoryMessengeForUser } from "../../components/Header/UserModal/UserModal.styled";

export const CheckoutPage = () => {
  const user = useSelector(selectUser);
  const [userFullName, setFullName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPostAdress, setUserPostAdress] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userNumberError, setUserNumberError] = useState("");
  const [postAdressError, setPostAdressError] = useState("");
  const [badForm, setBadForm] = useState(false);

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

  const handleFullName = (e) => {
    setFullName(e.target.value);
    const re =
      /^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError("Введіть повнe призвіще, ім'я, побатькові");
    } else {
      setNameError("");
    }
  };

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
    const re = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError(
        "Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'"
      );
    } else {
      setEmailError("");
    }
  };

  const handlePhoneNumber = (e) => {
    setUserNumber(e.target.value);
    const re =
      /^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/;
    if (!re.test(String(e.target.value))) {
      setUserNumberError("Номер невірного формату (наприклад: '043*******')");
    } else {
      setUserNumberError("");
    }
  };

  const handlePostAdress = (e) => {
    setUserPostAdress(e.target.value);
    if (!(e.target.value.length > 0)) {
      setPostAdressError("Адрес відділення пошти пустий");
    } else {
      setPostAdressError("");
    }
  };
  const sendToAdmin = async () => {
    if (
      userEmail &&
      userFullName &&
      userNumber &&
      userPostAdress &&
      !emailError &&
      !userNumberError &&
      !nameError &&
      !postAdressError
    ) {
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
        navigation("/");
      } catch (e) {
        console.log(e);
      }
    } else {
      setBadForm(true);
    }
  };

  useEffect(() => {
    if (!emailError && !userNumberError && !nameError && !postAdressError) {
      setBadForm(false);
    }
  });

  return (
    <CheckoutForm id="CheckoutForm">
      <CheckoutTitle>Контактні дані</CheckoutTitle>
      <CheckoutInput
        required
        name="name"
        value={userFullName}
        onChange={(e) => {
          handleFullName(e);
        }}
        placeholder="Введіть ПІБ"
        style={nameError ? { borderColor: "red" } : {}}
      />
      {nameError && <CheckoutUserAlert>{nameError}</CheckoutUserAlert>}
      <CheckoutInput
        value={userNumber}
        onChange={(e) => {
          handlePhoneNumber(e);
        }}
        placeholder="Введіть контактний номер телефону"
        style={userNumberError ? { borderColor: "red" } : {}}
      />
      {userNumberError && (
        <CheckoutUserAlert>{userNumberError}</CheckoutUserAlert>
      )}
      <CheckoutInput
        required
        name="email"
        value={userEmail}
        onChange={(e) => {
          handleEmail(e);
        }}
        placeholder="Введіть контактну електронну адресу"
        style={emailError ? { borderColor: "red" } : {}}
      />
      {emailError && <CheckoutUserAlert>{emailError}</CheckoutUserAlert>}

      <CheckoutInput
        value={userPostAdress}
        onChange={(e) => {
          handlePostAdress(e);
        }}
        placeholder="Введіть адресу відділення пошти"
        style={postAdressError ? { borderColor: "red" } : {}}
      />
      {postAdressError && (
        <CheckoutUserAlert>{postAdressError}</CheckoutUserAlert>
      )}

      <CheckoutUserAlert>
        Попередження, відправка куплених товарів відбувається виключно мережею
        відділень "Нова пошта", оплатою при отриманні !!!
      </CheckoutUserAlert>
      <CheckoutMessengeForUser>
        Для додаткової інформації чи відказу від замовлення
      </CheckoutMessengeForUser>
      <CheckoutMessengeForUser>
        сконтактуйтесь з адміністратором msshopua@gmail.com
      </CheckoutMessengeForUser>
      <CheckoutSubmit
        onClick={sendToAdmin}
        style={badForm ? { background: "red" } : {}}
      >
        {badForm
          ? "Невірно заповнена форма"
          : "Завершити оформлення замовлення"}
      </CheckoutSubmit>
    </CheckoutForm>
  );
};
