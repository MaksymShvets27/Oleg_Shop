import { useState } from "react";
import { UserConfigDiv, UserConfigStr } from "./UserConfig.styled";
import { UserModal } from "../UserModal/UserModal";

export const UserConfig = () => {
  const [openUserModal, setOpenUserModal] = useState(false);
  const [typeUserModal, setTypeUserModal] = useState("");
  const userLogIn = false;

  const closeUserModal = () => {
    setOpenUserModal(false);
  };
  return (
    <>
      {userLogIn ? (
        <>
          <UserConfigStr
            onClick={() => {
              setTypeUserModal("Config");
              setOpenUserModal(true);
            }}
          >
            Користувач
          </UserConfigStr>
        </>
      ) : (
        <UserConfigDiv>
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
        </UserConfigDiv>
      )}
      {openUserModal && (
        <UserModal closeUserModal={closeUserModal} typeModal={typeUserModal} />
      )}
    </>
  );
};
