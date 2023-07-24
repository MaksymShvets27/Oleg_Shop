import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ModalOverlay,
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

export const UserModal = ({ closeUserModal, typeModal }) => {
  const [badPassword, setBadPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDublicate, setPasswordDublicate] = useState("");
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
    if (password === passwordDublicate) {
      dispatch(
        authSignUpUser({
          email,
          password,
          userName: name,
        })
      );
      setBadPassword(false);
      closeUserModal();
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
  return (
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <UserModalStyled>
          {typeModal === "SignIn" && (
            <UserModalForm id="userFormSignIn">
              <UserModalTitle>Ім'я:</UserModalTitle>
              <UserModalInput
                required
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
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
              <UserModalTitle>Повторіть пароль:</UserModalTitle>
              <UserModalInput
                required
                name="passwordDublicate"
                value={passwordDublicate}
                onChange={(e) => {
                  setPasswordDublicate(e.target.value);
                }}
              />
              <UserModalBtn
                style={badPassword ? { backgroundColor: "red" } : {}}
                onClick={SignUp}
              >
                {badPassword ? "Невірний пароль або e-mail" : "Зареєструватись"}
              </UserModalBtn>
            </UserModalForm>
          )}
          {typeModal === "LogIn" && (
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
          {typeModal === "Config" && (
            <UserModalForm id="userFormConfig">
              <UserModalTitle>Ім'я:</UserModalTitle>
              <UserModalInput
                required
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
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
              <UserModalTitle>Повторіть пароль:</UserModalTitle>
              <UserModalInput
                required
                name="passwordDublicate"
                value={passwordDublicate}
                onChange={(e) => {
                  setPasswordDublicate(e.target.value);
                }}
              />
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
