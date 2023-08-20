import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HistoryCardImg,
  HistoryListItem,
  HistoryListStyled,
  HistoryMessengeForUser,
  HistoryStatusCircle,
  ModalOverlay,
  ModalUserAlert,
  ModalWrapper,
  UserModalBtn,
  UserModalForm,
  UserModalHistoryDiv,
  UserModalHistoryItemP,
  UserModalHistoryOrderItem,
  UserModalInfoDiv,
  UserModalInfoP,
  UserModalInfoSubtitle,
  UserModalInput,
  UserModalNav,
  UserModalNavBtn,
  UserModalStyled,
  UserModalTitle,
} from "./UserModal.styled";
import {
  authSetFavoriteList,
  authSignInUser,
  authSignOutUser,
  authSignUpUser,
} from "../../../redux/auth.thunk";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { selectUser } from "../../../redux/selectors";
import {
  OrderListItem,
  OrderListStyled,
} from "../../../pages/Admin/OrdersList.styled";
import { UserFavorileList } from "./UserFavoriteList";
import localStorage from "redux-persist/es/storage";

export const UserModal = ({ closeUserModal, typeModal }) => {
  const [typeUserModal, setTypeUserModal] = useState(typeModal);
  const [badPassword, setBadPassword] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDublicate, setPasswordDublicate] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordDublicateError, setPasswordDublicateError] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userNumberError, setUserNumberError] = useState("");
  const [userPostAdress, setUserPostAdress] = useState("");
  const [userOrders, setUserOrders] = useState([]);
  const [userModalNav, setUserModalNav] = useState("info");

  const [logInError, setLogInError] = useState("");

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onClickBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      closeUserModal();
    }
  };

  const closeOnESCLogoModal = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      closeUserModal();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnESCLogoModal);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnESCLogoModal);
    };
  }, []);

  const handleFullName = (e) => {
    setName(e.target.value);
    const re =
      /^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError("Введіть повнe призвіще, ім'я, побатькові");
    } else {
      setNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const re = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError(
        "Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'"
      );
    } else {
      setEmailError("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Довжина пароля повина бути від 6 символів");
    } else {
      setPasswordError("");
    }
  };

  const handleDublicatePassword = (e) => {
    setPasswordDublicate(e.target.value);
    if (e.target.value !== password) {
      setPasswordDublicateError("Введені паролі нe співпадають");
    } else {
      setPasswordDublicateError("");
    }
  };

  const handlePhoneNumber = (e) => {
    setUserNumber(e.target.value);
    const re =
      /^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/;
    if (!re.test(String(e.target.value))) {
      setUserNumberError("Номер невірного формату (наприклад '043*******')");
    } else {
      setUserNumberError("");
    }
  };
  /* Registration*/
  const SignUp = () => {
    if (
      !nameError &&
      !emailError &&
      !passwordError &&
      !passwordDublicateError &&
      !userNumberError &&
      passwordDublicate &&
      name &&
      email &&
      password &&
      userNumber &&
      userPostAdress
    ) {
      dispatch(
        authSignUpUser({
          email,
          password,
          userName: name,
        })
      );
      addUser({
        name,
        email,
        password,
        userNumber,
        userPostAdress,
        favoriteList: [],
      });
      setBadPassword(false);
      setTypeUserModal("LogIn");
    } else {
      setBadPassword(true);
    }
  };

  const addUser = async (data) => {
    try {
      await setDoc(doc(db, "users", `${data.email}`), data);
    } catch (e) {
      console.error("Error adding user: ", e);
    }
  };

  /* LogIn*/

  const LogIn = async () => {
    try {
      dispatch(
        authSignInUser({
          email,
          password,
        })
      );
      dispatch(authSetFavoriteList(email));
      await updateDoc(doc(db, "users", `${email}`), { isLogIn: true });
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      closeUserModal();
    } catch (e) {
      setLogInError("Email не зареестрований або невіний пароль");
      console.error("Error adding user: ", e);
    }
  };

  const LogOut = async () => {
    closeUserModal();

    dispatch(authSignOutUser());
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");

    try {
      await updateDoc(doc(db, "users", `${user.email}`), { isLogIn: false });
    } catch (e) {
      console.error("Error adding user: ", e);
    }
  };

  /* Get user information*/

  const takeUser = async () => {
    const docSnap = await getDoc(doc(db, "users", `${user.email}`));

    if (docSnap.exists()) {
      const { name, userPostAdress, userNumber } = docSnap.data();

      setName(name);
      setUserNumber(userNumber);
      setUserPostAdress(userPostAdress);
    }
  };

  useEffect(() => {
    if (user.email) {
      takeUser();
      setUserNumberError("");
    }
  }, [userModalNav, dispatch]);

  /* Change user information*/

  const changeUserQuery = async () => {
    if (!userNumberError) {
      try {
        await updateDoc(doc(db, "users", `${user.email}`), {
          userNumber: userNumber,
          userPostAdress: userPostAdress,
        });
        setUserModalNav("info");
      } catch (e) {
        console.error("Error change user: ", e);
      }
    }
  };

  /* Order history*/

  const takeUserOrders = async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, "orders"),
          where("userEmail", "==", `${user.email}`)
        )
      );
      querySnapshot.forEach((doc) => {
        setUserOrders((data) => [...data, { id: doc.id, ...doc.data() }]);
      });
      setUserOrders((data) =>
        data.sort((a, b) => (a.postDate > b.postDate ? -1 : 1))
      );
    } catch (e) {
      console.error("Error take orders: ", e);
    }
  };

  useEffect(() => {
    takeUserOrders();
  }, [dispatch]);
  return (
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <UserModalStyled>
          {typeUserModal === "SignIn" && (
            <UserModalForm id="userFormSignIn">
              <UserModalTitle>Контактні дані</UserModalTitle>
              <UserModalInput
                required
                name="name"
                value={name}
                onChange={(e) => {
                  handleFullName(e);
                }}
                placeholder="Введіть ПІБ"
                style={nameError ? { borderColor: "red" } : {}}
              />
              {nameError && <ModalUserAlert>{nameError}</ModalUserAlert>}
              <UserModalInput
                required
                name="email"
                value={email}
                onChange={(e) => {
                  handleEmail(e);
                }}
                placeholder="Введіть контактну електронну адресу"
                style={emailError ? { borderColor: "red" } : {}}
              />
              {emailError && <ModalUserAlert>{emailError}</ModalUserAlert>}
              <UserModalInput
                required
                name="password"
                value={password}
                onChange={(e) => {
                  handlePassword(e);
                }}
                placeholder="Введіть пароль"
                autoComplete="on"
                minlength="5"
                style={passwordError ? { borderColor: "red" } : {}}
              />
              {passwordError && (
                <ModalUserAlert>{passwordError}</ModalUserAlert>
              )}
              <UserModalInput
                required
                name="passwordDublicate"
                value={passwordDublicate}
                onChange={(e) => {
                  handleDublicatePassword(e);
                }}
                placeholder="Повторіть пароль"
                style={passwordDublicateError ? { borderColor: "red" } : {}}
              />
              {passwordDublicateError && (
                <ModalUserAlert>{passwordDublicateError}</ModalUserAlert>
              )}
              <UserModalInput
                value={userNumber}
                type="number"
                onChange={(e) => {
                  handlePhoneNumber(e);
                }}
                placeholder="Введіть контактний номер телефону"
                style={userNumberError ? { borderColor: "red" } : {}}
              />
              {userNumberError && (
                <ModalUserAlert>{userNumberError}</ModalUserAlert>
              )}
              <UserModalInput
                value={userPostAdress}
                onChange={(e) => {
                  setUserPostAdress(e.target.value);
                }}
                placeholder="Введіть адресу відділення пошти"
              />
              <ModalUserAlert>
                Попередження, відправка куплених товарів відбувається виключно
                мережею відділень "Нова пошта", оплатою при отриманні !!!
              </ModalUserAlert>
              <UserModalBtn
                style={badPassword ? { backgroundColor: "red" } : {}}
                onClick={SignUp}
              >
                {"Зареєструватись"}
              </UserModalBtn>
            </UserModalForm>
          )}
          {typeUserModal === "LogIn" && (
            <UserModalForm id="userFormLogIn">
              <UserModalTitle>E-mail:</UserModalTitle>
              <UserModalInput
                required
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <UserModalTitle>Пароль:</UserModalTitle>
              <UserModalInput
                required
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {logInError && <ModalUserAlert>{logInError}</ModalUserAlert>}
              <UserModalBtn onClick={LogIn}>Увійти</UserModalBtn>
            </UserModalForm>
          )}
          {typeUserModal === "Config" && (
            <>
              <UserModalNav>
                <UserModalNavBtn
                  onClick={() => {
                    setUserModalNav("info");
                  }}
                >
                  Користувач
                </UserModalNavBtn>
                <UserModalNavBtn
                  onClick={() => {
                    setUserModalNav("change");
                  }}
                >
                  Зміна данних
                </UserModalNavBtn>
                <UserModalNavBtn
                  onClick={() => {
                    setUserModalNav("favorite");
                  }}
                >
                  Обране
                </UserModalNavBtn>
                <UserModalNavBtn
                  onClick={() => {
                    setUserModalNav("history");
                  }}
                >
                  Історія покупок
                </UserModalNavBtn>
              </UserModalNav>
              {userModalNav === "info" && (
                <UserModalForm id="userFormConfig">
                  <UserModalTitle>Інформація користувача</UserModalTitle>
                  <UserModalInfoDiv>
                    <UserModalInfoSubtitle>
                      Призвіще, ім'я, по батькові:
                    </UserModalInfoSubtitle>
                    <UserModalInfoP>{name}</UserModalInfoP>
                    <UserModalInfoSubtitle>E-mail:</UserModalInfoSubtitle>
                    <UserModalInfoP>{user.email}</UserModalInfoP>
                    <UserModalInfoSubtitle>
                      Номер телефону:
                    </UserModalInfoSubtitle>
                    <UserModalInfoP> {userNumber}</UserModalInfoP>
                    <UserModalInfoSubtitle>
                      Відділення "Нова пошти":
                    </UserModalInfoSubtitle>
                    <UserModalInfoP>{userPostAdress}</UserModalInfoP>
                  </UserModalInfoDiv>
                  <UserModalBtn onClick={LogOut}>Вийти з аккаунта</UserModalBtn>
                </UserModalForm>
              )}
              {userModalNav === "change" && (
                <UserModalForm id="userFormConfig">
                  <UserModalTitle>Зміна данних</UserModalTitle>
                  <UserModalInput
                    value={userNumber}
                    type="number"
                    onChange={(e) => {
                      handlePhoneNumber(e);
                    }}
                    placeholder="Введіть контактний номер телефону"
                    style={userNumberError ? { borderColor: "red" } : {}}
                  />
                  {userNumberError && (
                    <ModalUserAlert>{userNumberError}</ModalUserAlert>
                  )}
                  <UserModalInput
                    value={userPostAdress}
                    onChange={(e) => {
                      setUserPostAdress(e.target.value);
                    }}
                    placeholder="Введіть адресу відділення пошти"
                  />
                  <ModalUserAlert>
                    Попередження, відправка куплених товарів відбувається
                    виключно мережею відділень "Нова пошта", оплатою при
                    отриманні !!!
                  </ModalUserAlert>
                  <UserModalBtn onClick={changeUserQuery}>
                    Змінити дані
                  </UserModalBtn>
                </UserModalForm>
              )}
              {userModalNav === "favorite" && <UserFavorileList />}
              {userModalNav === "history" && (
                <UserModalHistoryDiv>
                  <UserModalTitle>Історія покупок</UserModalTitle>

                  <HistoryMessengeForUser>
                    Для додаткової інформації чи відказу від замовлення
                  </HistoryMessengeForUser>
                  <HistoryMessengeForUser>
                    сконтактуйтесь з адміністратором msshopua@gmail.com
                  </HistoryMessengeForUser>

                  <HistoryListStyled>
                    {userOrders.map((order) => {
                      return (
                        <HistoryListItem>
                          <HistoryStatusCircle
                            style={
                              order.status === "take"
                                ? {
                                    backgroundColor: "yellow",
                                  }
                                : order.status === "send"
                                ? {
                                    backgroundColor: "green",
                                  }
                                : {}
                            }
                          />
                          <UserModalHistoryItemP>
                            <UserModalHistoryItemP>
                              Статус:
                              {order.status === "create" &&
                                " Замовлення оформлене"}
                              {order.status === "take" && " Прийняте"}
                              {order.status === "send" && " Відправлене"}
                            </UserModalHistoryItemP>
                            Дата замовлення:{" "}
                            {new Intl.DateTimeFormat("en-US").format(
                              order.postDate.seconds
                            )}
                          </UserModalHistoryItemP>
                          <UserModalHistoryItemP>
                            ФІП: {order.userFullName}
                          </UserModalHistoryItemP>
                          <UserModalHistoryItemP>
                            Email: {order.userEmail}
                          </UserModalHistoryItemP>
                          <UserModalHistoryItemP>
                            Номер телефону: {order.userNumber}
                          </UserModalHistoryItemP>
                          <UserModalHistoryItemP>
                            Адрес Нової почти: {order.userPostAdress}
                          </UserModalHistoryItemP>
                          <UserModalHistoryItemP>
                            Список замовлення:
                          </UserModalHistoryItemP>
                          {order.cashList.map((item) => {
                            return (
                              <UserModalHistoryOrderItem>
                                <HistoryCardImg
                                  style={{
                                    backgroundImage: `url(${item.image})`,
                                  }}
                                />

                                <UserModalHistoryItemP>
                                  Назва: {item.name}
                                </UserModalHistoryItemP>
                                <UserModalHistoryItemP>
                                  Ціна: {item.price}
                                </UserModalHistoryItemP>
                              </UserModalHistoryOrderItem>
                            );
                          })}
                        </HistoryListItem>
                      );
                    })}
                  </HistoryListStyled>
                </UserModalHistoryDiv>
              )}
            </>
          )}
        </UserModalStyled>
      </ModalWrapper>
    </ModalOverlay>
  );
};
