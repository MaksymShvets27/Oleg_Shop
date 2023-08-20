import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import {
  BiCartStyled,
  CashListIcon,
  CashListLength,
  HeaderContainer,
  HeaderStyled,
} from "./Header.styled";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { UserConfig } from "./UserConfig/UserConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { authSetFavoriteList, authSignInUser } from "../../redux/auth.thunk";
import { useEffect } from "react";

export const Header = () => {
  const { cashList } = useSelector(selectUser);
  const navigate = useNavigate();

  const path = useLocation().pathname;

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      localStorage.getItem("userEmail") &&
      localStorage.getItem("userPassword")
    ) {
      LogIn();
    }
  }, []);

  const LogIn = async () => {
    const email = await localStorage.getItem("userEmail");
    const password = await localStorage.getItem("userPassword");
    dispatch(
      authSignInUser({
        email,
        password,
      })
    );
    dispatch(authSetFavoriteList(email));
  };

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo />
        {!(path === "/checkout") && (
          <>
            <Navigation />
            <UserConfig />
          </>
        )}
      </HeaderContainer>
      {!(path === "/cashList" || path === "/admin" || path === "/checkout") && (
        <CashListIcon>
          <BiCartStyled
            onClick={() => {
              navigate("/cashList");
            }}
          />
          <CashListLength>{cashList.length}</CashListLength>
        </CashListIcon>
      )}
    </HeaderStyled>
  );
};
