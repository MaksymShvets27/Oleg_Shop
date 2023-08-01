import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalOverlay,
  ModalUserAlert,
  ModalWrapper,
  UserModalBtn,
  UserModalForm,
  UserModalInput,
  UserModalStyled,
  UserModalTitle,
} from "./UserModal.styled";
import {
  authSignInUser,
  authSignOutUser,
  authSignUpUser,
} from "../../../redux/auth.thunk";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { selectUser } from "../../../redux/selectors";

export const UserModal = ({ closeUserModal, typeModal }) => {
  const [typeUserModal, setTypeUserModal] = useState(typeModal);
  const [badPassword, setBadPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDublicate, setPasswordDublicate] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userPostAdress, setUserPostAdress] = useState("");

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

  const SignUp = () => {
    if (
      password === passwordDublicate &&
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
      });
      setBadPassword(false);
      setTypeUserModal("LogIn");
    } else {
      setBadPassword(true);
    }
  };

  const LogIn = () => {
    dispatch(
      authSignInUser({
        email,
        password,
      })
    );
    closeUserModal();
  };

  const LogOut = () => {
    dispatch(authSignOutUser());
    closeUserModal();
  };

  const addUser = async (data) => {
    try {
      await setDoc(doc(db, "users", `${data.email}`), data);
      alert("Add user success");
    } catch (e) {
      console.error("Error adding user: ", e);
    }
  };

  const takeUser = async () => {
    const docSnap = await getDoc(doc(db, "users", `${user.email}`));

    if (docSnap.exists()) {
      const { name, userPostAdress, userNumber } = docSnap.data();

      setName(name);
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
  }, [dispatch]);
  // const changeUser = async (data) => {
  //   try {
  //     await addDoc(collection(db, "users"), data);
  //     alert("Add user success");
  //   } catch (e) {
  //     console.error("Error adding user: ", e);
  //   }
  // };

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
                  setName(e.target.value);
                }}
                placeholder="Введіть ФІБ"
              />
              <UserModalInput
                required
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Введіть контактну електронну адресу"
              />
              <UserModalInput
                required
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Введіть пароль"
              />
              <UserModalInput
                required
                name="passwordDublicate"
                value={passwordDublicate}
                onChange={(e) => {
                  setPasswordDublicate(e.target.value);
                }}
                placeholder="Повторіть пароль"
              />
              <UserModalInput
                value={userNumber}
                onChange={(e) => {
                  setUserNumber(e.target.value);
                }}
                placeholder="Введіть контактний номер телефону"
              />
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
                {badPassword ? "Невірний пароль або e-mail" : "Зареєструватись"}
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
              <UserModalBtn onClick={LogIn}>Увійти</UserModalBtn>
            </UserModalForm>
          )}
          {typeUserModal === "Config" && (
            <UserModalForm id="userFormConfig">
              <UserModalTitle>Контактні дані</UserModalTitle>
              <UserModalInput
                required
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Введіть ФІБ"
              />
              <UserModalInput
                required
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Введіть контактну електронну адресу"
              />
              <UserModalInput
                required
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Введіть пароль"
              />
              <UserModalInput
                required
                name="passwordDublicate"
                value={passwordDublicate}
                onChange={(e) => {
                  setPasswordDublicate(e.target.value);
                }}
                placeholder="Повторіть пароль"
              />
              <UserModalInput
                value={userNumber}
                onChange={(e) => {
                  setUserNumber(e.target.value);
                }}
                placeholder="Введіть контактний номер телефону"
              />
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
              >
                {badPassword ? "Невірний пароль або e-mail" : "Змінити дані"}
              </UserModalBtn>
              <UserModalBtn onClick={LogOut}>Вийти з аккаунта</UserModalBtn>
            </UserModalForm>
          )}
        </UserModalStyled>
      </ModalWrapper>
    </ModalOverlay>
  );
};
