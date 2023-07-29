import { useSelector } from "react-redux";
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

export const Header = () => {
  const { cashList } = useSelector(selectUser);
  const navigate = useNavigate();

  const path = useLocation().pathname;

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo />
        <Navigation />
        <UserConfig />
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
