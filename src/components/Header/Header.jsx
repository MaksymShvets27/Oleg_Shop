import { HeaderContainer, HeaderStyled } from "./Header.styled";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Navigation />
      </HeaderContainer>
    </HeaderStyled>
  );
};
