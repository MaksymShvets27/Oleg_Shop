import { HeaderContainer, HeaderStyled } from "./Header.styled";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { UserConfig } from "./UserConfig/UserConfig";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo />
        <Navigation />
        <UserConfig />
      </HeaderContainer>
    </HeaderStyled>
  );
};
