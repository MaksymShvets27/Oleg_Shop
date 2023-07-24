import { useState } from "react";
import { UserConfigDiv, UserConfigStr } from "./UserConfig.styled";
import { UserModal } from "../UserModal/UserModal";
import { selectUser } from "../../../redux/selectors";
import { useSelector } from "react-redux";

export const UserConfig = () => {
  const [openUserModal, setOpenUserModal] = useState(false);
  const [typeUserModal, setTypeUserModal] = useState("");
  const user = useSelector(selectUser);
  const userLogIn = user.isLogIn;

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
