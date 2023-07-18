import { useState } from "react";
import { UserConfigStr } from "./UserConfig.styled";
import { UserModal } from "../UserModal/UserModal";

export const UserConfig = () => {
  const [openUserModal, setOpenUserModal] = useState(false);
  const [typeUserModal, setTypeUserModal] = useState("");

  const closeUserModal = () => {
    setOpenUserModal(false);
  };
  return (
    <>
      <UserConfigStr
        onClick={() => {
          setTypeUserModal("Config");
          setOpenUserModal(true);
        }}
      >
        Користувач
      </UserConfigStr>
      <UserConfigStr
        onClick={() => {
          setTypeUserModal("LogIn");
          setOpenUserModal(true);
        }}
      >
        Увійти
      </UserConfigStr>
      <UserConfigStr
        onClick={() => {
          setTypeUserModal("SignIn");
          setOpenUserModal(true);
        }}
      >
        Зареєструватись
      </UserConfigStr>
      {openUserModal && (
        <UserModal closeUserModal={closeUserModal} typeModal={typeUserModal} />
      )}
    </>
  );
};
