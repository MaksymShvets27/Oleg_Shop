import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ModalOverlay,
  ModalWrapper,
  UserModalBtn,
  UserModalForm,
  UserModalInput,
  UserModalStyled,
  UserModalTitle,
} from "./UserModal.styled";

export const UserModal = ({ closeUserModal, typeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  console.log(typeModal);

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnESCLogoModal);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnESCLogoModal);
    };
  }, []);

  return (
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <UserModalStyled>
          {typeModal === "SignIn" && (
            <UserModalForm id="userFormSignIn">
              <UserModalTitle>Ім'я:</UserModalTitle>
              <UserModalInput required name="name" />
              <UserModalTitle>E-mail:</UserModalTitle>
              <UserModalInput required name="email" />
              <UserModalTitle>Пароль:</UserModalTitle>
              <UserModalInput required name="password" />
              <UserModalTitle>Повторіть пароль:</UserModalTitle>
              <UserModalInput required name="passwordDublicate" />
              <UserModalBtn>Зареєструватись</UserModalBtn>
            </UserModalForm>
          )}
          {typeModal === "LogIn" && (
            <UserModalForm id="userFormLogIn">
              <UserModalTitle>E-mail:</UserModalTitle>
              <UserModalInput required name="email" />
              <UserModalTitle>Пароль:</UserModalTitle>
              <UserModalInput required name="password" />
              <UserModalBtn>Увійти</UserModalBtn>
            </UserModalForm>
          )}
          {typeModal === "Config" && (
            <UserModalForm id="userFormConfig">
              <UserModalTitle>Ім'я:</UserModalTitle>
              <UserModalInput required name="name" />
              <UserModalTitle>E-mail:</UserModalTitle>
              <UserModalInput required name="email" />
              <UserModalTitle>Пароль:</UserModalTitle>
              <UserModalInput required name="password" />
              <UserModalTitle>Повторіть пароль:</UserModalTitle>
              <UserModalInput required name="passwordDublicate" />
              <UserModalBtn>Змінити дані</UserModalBtn>
            </UserModalForm>
          )}
        </UserModalStyled>
      </ModalWrapper>
    </ModalOverlay>
  );
};
