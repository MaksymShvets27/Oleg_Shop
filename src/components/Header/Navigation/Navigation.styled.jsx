import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderNavigation = styled.nav`
  display: flex;
  gap: 45px;
`;

export const StyledNavigationLink = styled(NavLink)`
  color: black;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  &.active {
    color: green;
  }

  &:hover {
    color: green;
  }
`;
